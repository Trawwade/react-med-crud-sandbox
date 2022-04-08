import "./App.css";
import { getDatabase, ref, child, get } from "firebase/database";
import { useContext } from "react";
import React from "react";
// import { database } from "./firebase";
// import { uid } from "uid"
// import {getDatabase, ref, set } from "firebase/database";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainpage from "./pages/Mainpage";
import { Newdata } from "./pages/Newdata";
import Edit from "./pages/Edit";
import View from "./pages/View";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";


// writing to database

export  const NewContext = React.createContext(); 
function App() {
  const [newData, setNewData] = useState(false);

 
  //data
  const [patientsData, setPatientsData] = useState([]);
  function getData(){
    const dbRef = ref(getDatabase());
    get(child(dbRef, "users"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          // console.log(snapshot.val());
          const data = snapshot.val();
          setPatientsData(Object.values(data));
          // console.log(patientsData);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
  // render data 
  useEffect(() => {
  getData()

    return () => {};
  }, [newData]);

  return (
    <>
    <NewContext.Provider value = {{newData,setNewData}}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Mainpage data={patientsData} />} />
          <Route path="/newdata" element={<Newdata />} />
          <Route path="edit/:title"  element={<Edit data={patientsData} />} />
          <Route path="/view/:title" element={<View />} />
        </Routes>
      </BrowserRouter>
      </NewContext.Provider>
    </>
  );
}

export default App;
