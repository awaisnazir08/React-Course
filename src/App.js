import './App.css';
import React, { useState } from 'react';
// import About from './Components/About';
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm';
import Alert from './Components/Alert'

function App() {
  const [alert,setAlert]=useState(null);
  const [mode,setMode]=useState('light');

  const showAlert=(message,type)=>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000)
  }

  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor="#042743";
      showAlert("The dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("The light mode has been enabled","success")
    }
  }
  return (
    <>
    <Navbar title="Text Utils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <TextForm heading="Enter the text to Analyze" placeholder="Enter here" mode={mode} showAlert={showAlert}/>
    {/* <About/> */}
    </>
  );
}

export default App;
