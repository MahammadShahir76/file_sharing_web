import './App.css';
import { useEffect, useRef, useState } from 'react';
import {uploadFile} from './services/Api'; // Use named import here

function App() {
  const [file,setfile]=useState('')
  const [result,setresult]=useState('');

  const fileChoose=useRef();//useref is used as a virtual dom used to get elements like getelementbyid kind of

useEffect(()=>{
 const getImage=async ()=>{
  if(file){
  const data=new FormData();
  data.append("name",file.name);
  data.append("file",file)
  let response =await uploadFile(data);  
  setresult(response.path)
}
 }
 getImage();
},[file])


const filechoosen=()=>{
  fileChoose.current.click();
}


  return (
    <div className='container'>
     <img src='https://s7s4v4p8.rocketcdn.me/wp-content/uploads/2017/05/Vertical-Flowerpots_Black.-Room-e1552992471785.jpg'></img>

     <div className='wrapper'>
      <h1 className='font'>File sharing made Eazy</h1>
      <h2>share your file via a simple Link</h2>
      <button onClick={filechoosen}>Upload File</button>
      <input type='file'  ref={fileChoose} style={{display:'none'}} onChange={(e)=>setfile(e.target.files[0])}/>
      <a href={result} target='_blank'>{result}</a>
     </div> 
    </div>
  )
}

export default App;
