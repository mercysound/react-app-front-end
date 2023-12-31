import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const SignupPage = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [message, setmessage] = useState("")
  let navigate = useNavigate()
  let endpoint = "http://localhost:5000/user/postsignup"
  const signUp = () =>{
    let userDetails = {firstname, lastname, email, password};
    axios.post(endpoint, userDetails)
    .then((response)=>{
    setmessage(response.data.message)
    if(response.data.status){
      navigate("/signin")
    }
    }).catch((err)=>{
      console.log(err);
    })
    console.log(firstname, lastname, email, password);
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-9 mx-auto">
            <h1>Sign-up Page is here</h1>
            <h1 className={message===""?"":"alert alert-success"}>{message}</h1>
            <input className='form-control' placeholder='First name' type="text" onChange={(e)=>setfirstname(e.target.value)} />
            <input className='form-control' placeholder='Last name' type="text" onChange={(e)=>setlastname(e.target.value)} />
            <input className='form-control' placeholder='Email' type="text" onChange={(e)=>setemail(e.target.value)} />
            <input className='form-control' placeholder='Password' type="text" onChange={(e)=>setpassword(e.target.value)} />
            <button className='form-control' type="button" onClick={signUp}>Submit</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignupPage;