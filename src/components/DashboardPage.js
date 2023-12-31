import  { React, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {
  let navigate = useNavigate()
  let token = localStorage.token
  let endpoint = "http://localhost:5000/user/dashboard";
  useEffect(() => {
    axios.get(endpoint, {headers:{
      "Authorization" : `Bearer ${token}`,
      "Content-Type" : "application/json",
      "Accept" : "application/json"
    }
  })
    .then((res)=>{
      if(res.data.status){
        alert("remain blessed")
      }else{
        navigate("/signin")
      }
    })
  }, [])
  return (
    <>
      <h1>Welcome to navigate</h1>
    </>
  )
}

export default DashboardPage;