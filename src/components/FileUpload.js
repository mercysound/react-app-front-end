import {React, useState} from 'react'
import axios from 'axios';
// import { upload } from '@testing-library/user-event/dist/upload';

const FileUpload = () => {
  const [imgeUploaded, setimgeUploaded] = useState("")
  let endpoint = "http://localhost:5000/user/upload"
const [myfile, setmyfile] = useState("");
// console.log(myfile.target.value);
const inputChange = (e) =>{
  let myImg = e.target.files[0];
  let reader = new FileReader();
  reader.readAsDataURL(myImg);
  reader.onload = ()=>{
    setmyfile(reader.result)
  }

}

const uploadBtn = () =>{
  axios.post(endpoint, {myfile})
  .then((result)=>{
    setimgeUploaded(result.data.myImgLink);
    console.log(result);
  })
}
  return (
    <>
      {/* <input type="file" onChange={(e)=>inputChange(e)}/> */}
      <input encType="multipart/form-data" type="file" onChange={(e)=>inputChange(e)}/>
      <button onClick={uploadBtn} className='form-control btn btn-sm btn-success'>Upload</button>
      <img width="100" src={imgeUploaded} alt="" />
    </>
  )
}

export default FileUpload