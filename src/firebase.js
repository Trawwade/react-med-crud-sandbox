import { initializeApp } from "firebase/app"
// import { getFirestore } from "firebase/firestore"
import { getDatabase } from "firebase/database";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAEU92jTXzQW_x6v1W6CyxqkFw1wkpkEWE",
    authDomain: "react-med-7e96d.firebaseapp.com",
    projectId: "react-med-7e96d",
    storageBucket: "react-med-7e96d.appspot.com",
    messagingSenderId: "76021313587",
    appId: "1:76021313587:web:8e69e845807eae7c70b346"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const database = getDatabase(app);
export default database