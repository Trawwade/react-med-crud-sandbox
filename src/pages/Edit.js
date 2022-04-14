import React, {useContext, useState } from 'react'
import { useParams,useNavigate} from 'react-router-dom'
import { getDatabase, ref, set } from "firebase/database";
import { NewContext } from '../App';

const Edit = ({data}) => {
let navigate = useNavigate()
  const {newData,setNewData} = useContext(NewContext)
const title = useParams()
console.log({newData})
const id = title.title
console.log(id)
console.log(data)
// read data

// fetcth from firebase
// already passed the data from app component
//

// const [patient,setPatient]=useState({})
// useEffect(() => {
//   const dbRef = ref(getDatabase());
//   get(child(dbRef, `users/${id}`)).then((snapshot) => {
//     if (snapshot.exists()) {
//       console.log(snapshot.val());
//       const currentP = snapshot.val()
//       setPatient({...currentP})
//     } else {
//       console.log("No data available");
//     }
//   }).catch((error) => {
//     console.error(error);
//   });
  

//   return () => {
    
//   }
// }, [])


// using data passed fromprops
const patient = Object.values(data).filter(checkKey)
const currentPatient=patient[0]
console.log(currentPatient)
function checkKey(e){
  if(e.key === id){
    return e
  }
}


const [state,setState]= useState({...currentPatient})


// console.log(data)




    
   const {firstName ,
    lastName ,
    occupation,
    address,
    phone,
    cardNumber,
    bloodPressure,
    pulse,
    height,
    weight,
    assessments,
    caseNote
    } = state
// update data
function update(){

const db = getDatabase();
set(ref(db, 'users/' + id), {
  ...state
})
.then(() => {
  console.log("saved data")
  // Data saved successfully!
})
.catch((error) => {
  // The write failed...
});}
    const handleChange=(e)=>{
        const {name,value}= e.target
        setState({...state,[name]:value})

    }


   const handleSubmit = (e)=>{
       e.preventDefault()
       update()
       setNewData(!newData)
       navigate("/")
  

   }
  return (
    <div className='container'>
        <header>
            
<h2 className='EDIT--HEAD'>Add New User</h2>
        </header>
<form className='edit--form' onSubmit={handleSubmit}>
        <h3 className=''>
    Biodata
  </h3>
  <div className='grid--5fr'>

  <label htmlFor="firstName">First name:</label>
    <input type="text" value={firstName} className=''id="firstName" name="firstName" onChange={handleChange}
 placeholder="First Name" />
   </div>
    <div className='grid--5fr'>
    <label htmlFor="lastName">LAST name:</label>
    <input type="text" value={lastName} onChange={handleChange} className="" id="lastName" name="lastName" placeholder="Last Name" />
</div>
<div className='grid--5fr'>
  <label htmlFor="occupation">occupation:</label>
  <input className="" type="text" value={occupation} name="occupation" onChange={handleChange}/>
</div>
  <div className='grid--5fr'>
  <label htmlFor="address">ADDRESS:</label>
    <input type="text" name='address' value={address} className="
" id="address" onChange={handleChange}/>
  </div>
  <div className='grid--5fr'>
    <label htmlFor="cardNumber">card number:</label>
    <input className="
" type="number" id="cardNumber" name="cardNumber" value={cardNumber} placeholder="cardnumber" onChange={handleChange} />
    <label htmlFor="phone">phonenumber:</label>
    <input className="
" type="number" id="phone" name="phone" value={phone} placeholder="phone" onChange={handleChange} />
  </div>
  <div className='grid--5fr'>
  <label htmlFor='bloodPressure'>blood pressure</label>
  <input className="" onChange={handleChange} name="bloodPressure" value={bloodPressure} type="number" id="bloodPressure"/>
</div>
<div className='grid--5fr'>
  <label htmlFor="pulse">pulse</label>
  <input type="number" name='pulse' className="" value={pulse} id="pulse" onChange={handleChange}/>
  </div>
  <div className='grid--5fr'>
  <label htmlFor="height">height</label>
  <input type="number" name='height' value={height} className="ml-auto         htmlForm-control
" id="height" onChange={handleChange}/></div>
 <div className='grid--5fr'> <label htmlFor="weightt">weight</label>
  <input type="number" className="" value={weight} id="weight" name='weight' onChange={handleChange}/>
  </div>
  <div className='grid--5fr'><label htmlFor="assessment">assessments</label>
<input type="text" name='assessments' className='' value={assessments}
 id="assessments" onChange={handleChange}/>
 </div>
 <div className='grid--5fr'>
<label htmlFor="caseNote"> casenote</label>
<input type="text" name='caseNote' value={caseNote} className="" id="" onChange={handleChange}/>
</div>

<button className="" id="btn-submit" onClick={handleSubmit}>Submit</button>


        </form>
    </div>
  )
}

export default Edit