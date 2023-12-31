import React, { useState } from 'react'
import axios from 'axios';
import {useNavigate} from "react-router-dom"
const SignInPage = () => {
  let navigate = useNavigate()
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [message, setmessage] = useState("")
  let endpoint = "http://localhost:5000/user/signin"
  const signIn = ()=>{
    let userDetail = {email, password}
    axios.post(endpoint, userDetail)
    .then((response)=>{
      setmessage(response.data.message)
      if(response.data.status){
        localStorage.token = response.data.token
        navigate("/dashboard")
      }
    })
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-9 mx-auto">
          <h1 className={message===""?"":"alert alert-success"}>{message}</h1>
            <h1>Sign In Page is here</h1>
            <input className='form-control' placeholder='Email' type="text" onChange={(e)=>setemail(e.target.value)} />
            <input className='form-control' placeholder='Password' type="text" onChange={(e)=>setpassword(e.target.value)} />
            <button className='form-control' type="button" onClick={signIn}>Submit</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignInPage;