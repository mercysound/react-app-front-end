import { React, useEffect, useState } from 'react';

const ChatApp = ({socket}) => { 
  const [message, setmessage] = useState("");
  const [msgSent, setmsgSent] = useState([]);
  let myTime = new Date;
  let hr = myTime.getHours().toLocaleString();
  let min = myTime.getMinutes().toLocaleString();
  let time  = (hr+":"+min);
  const sendMessage = ()=>{
    console.log(message);
    socket.current.emit("sendMsg", {message, time})
  }
  useEffect(() => {
    if(socket.current){
      socket.current.on("broadcastMsg", (message)=>{
        setmsgSent([...msgSent, message])
        console.log(message);
      });
    }
  })
  
  return (
    <>
      <div className="container">
        <div className="h-75">
          <div className="row">
          <div className="display mx-50">{msgSent.map((item, index)=>
            <div className='bg-danger column-gap-5 d-flex w-75 mx-auto my-2' key={index}><p className='me-5'>{item.time}</p><p>{item.message}</p></div>
          )}</div>
          <div className="col-9">
          <input className='form-control' type="text" placeholder='Type something' onChange={(e)=>setmessage(e.target.value)}/>
          </div>
          <div className="col-3">
            <button onClick={sendMessage} className='btn btn-info'>Send Message</button>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChatApp