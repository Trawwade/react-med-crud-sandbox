import React from "react";
import { database } from "../firebase";
import { uid } from "uid";
import { getDatabase, ref, set } from "firebase/database";
import { useState,useContext } from "react";
import toast, {Toaster} from "react-hot-toast"
import { NewContext } from '../App';
import { Navigate, useNavigate } from "react-router-dom";


const notify =()=> toast("you clicked me")

export const Newdata = () => {
  const {newData,setNewData} = useContext(NewContext)
  const navigate = useNavigate()




  const iniState = {
    firstName: "",
    lastName: "",
    occupation: "",
    address: "",
    phone: "",
    cardNumber: "",
    bloodPressure: "",
    pulse: "",
    height: "",
    weight: "",
    assessments: "",
    caseNote: "",
  };
  
  
  //   const [firstname, setFirstname] = useState("");
  //   const [lastname, setLastname] = useState("");
  //   const [phone, setPhone] = useState("");
  //   const [cardnumber, setCardnumber] = useState("");
  const [state, setState] = useState(iniState);

  const {
    firstName,
    lastName,
    occupation,
    address,
    phone,
    cardNumber,
    bloodPressure,
    pulse,
    height,
    weight,
    assessments,
    caseNote,
  } = state;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

//   CLEAR INPUT
  const clearInput =()=>{
    setState({iniState})

  }

  // write data

  function writeUserData() {
    const uuid = uid();
    const db = getDatabase();
    set(ref(db, "users/" + uuid), {
      firstName,
      lastName,
      phone,
      cardNumber,
      bloodPressure, occupation,
      address,
      pulse,
      height,
      weight,
      assessments,
      caseNote,
      key: uuid,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    writeUserData();
    clearInput()
    notify()
    setNewData(!newData)
    navigate("/")
  };

  return (
    <div className="container">
      <Toaster/>
      <form className="edit--form">
        <div className="grid--5fr">
          <label htmlFor="firstName">firstname:</label>
          <input
            name="firstName"
            type="text"
            placeholder="first name"
           defaultValue={firstName}
            onChange={handleChange}
          />
        </div>
        <div className="grid--5fr">
          <label htmlFor="lastName">lastname:</label>
          <input
            type="text"
            name="lastName"
            placeholder="last name"
           defaultValue={lastName}
            onChange={handleChange}
          />
        </div>
        <div className="grid--5fr">
          <label htmlFor="occupation">occupation:</label>
          <input
            className=""
            type="text"
           defaultValue={occupation}
            name="occupation"
            onChange={handleChange}
          />
        </div>
        <div className="grid--5fr">
          <label htmlFor="address">ADDRESS:</label>
          <input
            type="text"
            name="address"
           defaultValue={address}
            className="
"
            id="address"
            onChange={handleChange}
          />
        </div>
        <div className="grid--5fr">
          <label htmlFor="cardNumber">cardnumber:</label>
          <input
            type="number"
            name="cardNumber"
            placeholder="cardnumber"
           defaultValue={cardNumber}
            onChange={handleChange}
          />
        </div>
        <div className="grid--5fr">
          <label htmlFor="phone">phone:</label>
          <input
            name="phone"
            type="number"
            placeholder="phone"
           defaultValue={phone}
            onChange={handleChange}
          />
        </div>
        <div className="grid--5fr">
          <label htmlFor="bloodPressure">blood pressure</label>
          <input
            className=""
            onChange={handleChange}
            name="bloodPressure"
           defaultValue={bloodPressure}
            type="number"
            id="bloodPressure"
          />
        </div>
        <div className="grid--5fr">
          <label htmlFor="pulse">pulse</label>
          <input
            type="number"
            name="pulse"
            className=""
           defaultValue={pulse}
            id="pulse"
            onChange={handleChange}
          />
        </div>
        <div className="grid--5fr">
          <label htmlFor="height">height</label>
          <input
            type="number"
            name="height"
           defaultValue={height}
            className=""
            id="height"
            onChange={handleChange}
          />
        </div>
        <div className="grid--5fr">
          {" "}
          <label htmlFor="weight">weight</label>
          <input
            type="number"
            className=""
           defaultValue={weight}
            id="weight"
            name="weight"
            onChange={handleChange}
          />
        </div>
        <div className="grid--5fr">
          <label htmlFor="assessments">assessments</label>
          <input
            type="text"
            name="assessments"
            className=""
           defaultValue={assessments}
        
            onChange={handleChange}
          />
        </div>
        <div className="grid--5fr">
          <label htmlFor="caseNote"> casenote</label>
          <input
            type="text"
            name="caseNote"
           defaultValue={caseNote}
            className=""
            id=""
            onChange={handleChange}
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          submit
        </button>
      </form>
    </div>
  );
};
