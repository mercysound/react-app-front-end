import React, {useState, useEffect, useRef} from "react";
import SignupPage from "./components/SignupPage";
import FileUpload from "./components/FileUpload";
import { Route, Routes, Navigate} from "react-router-dom";
import SignInPage from "./components/SignInPage";
import DashboardPage from "./components/DashboardPage";
import  socketClient  from "socket.io-client";
import ChatApp from "./components/ChatApp";

function App() {
  let socket = useRef()
let endPoint = "http://localhost:5000";
// console.log(socket)
useEffect(() => {
  socket.current = socketClient(endPoint)
  // setsocketConnect(new Socket(endPoint))
  // console.log(socket);
}, []);

  // const [socket, setsocket] = useState("") n
  // useEffect(() => {
  //   setsocket(clientSocket)
  // }, [])
  
  let token = localStorage.token
  return (
    <>
       {/* < SignupPage/> */}
      <Routes>
       <Route to="/uploadfile" element={<FileUpload/>}/>
       <Route path="/signup" element={<SignupPage/>}/>
       <Route path="/signin" element={<SignInPage/>}/>
       <Route path="/dashboard" element={token?<DashboardPage/>:<Navigate to="/signin"/>}/>
       <Route path="/chat" element={<ChatApp socket={socket}/>}/>
      </Routes>   
    </>
  );
}

export default App;
