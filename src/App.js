import './App.css';
import React, { useState } from 'react';
// import About from './Components/About';
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm';

function App() {
  const [mode,setMode]=useState('light');
  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor="#042743";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";

    }
  }
  return (
    <>
    <Navbar title="Text Utils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
    <TextForm heading="Enter the text to Analyze" placeholder="Enter here" mode={mode}/>
    {/* <About/> */}
    </>
  );
}

export default App;
