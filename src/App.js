import './App.css';
import React, { useState } from 'react';
// import About from './Components/About';
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm';
import Alert from './Components/Alert'

function App() {
  const [alert,setAlert]=useState(null);
  const [mode,setMode]=useState('light');
  const [formColor,setFormColor]=useState('white');
  const settingMode=(modd)=>{
    console.log('hello');
    if(modd==='purple')
    {
      document.getElementById("button1").classList.add("active");
      document.getElementById("button2").classList.remove("active");
      document.getElementById("lastbutton").classList.remove("active");
      document.body.style.backgroundColor="#9966ff";
      showAlert("The purple mode has been enabled","success");
      setFormColor('#9966ff');
      setMode('dark');
    }
    else if(modd==='blue')
    {
      document.getElementById("button1").classList.remove("active");
      document.getElementById("button2").classList.add("active");
      document.getElementById("lastbutton").classList.remove("active");
      document.body.style.backgroundColor="#00bfff";
      showAlert("The blue mode has been enabled","success");
      setFormColor('#00bfff');
      setMode('dark');
    }
    else if(modd==='grey')
    {
      document.getElementById("button1").classList.remove("active");
      document.getElementById("button2").classList.remove("active");
      document.getElementById("lastbutton").classList.add("active");
      document.body.style.backgroundColor="grey";
      showAlert("The grey mode has been enabled","success");
      setFormColor('grey');
      setMode('dark');
    }
    else if(modd==='green')
    {
      document.getElementById("button1").classList.remove("active");
      document.getElementById("button2").classList.remove("active");
      document.getElementById("button3").classList.add("active");
      document.body.style.backgroundColor="#003300";
      showAlert("The green mode has been enabled","success");
      setFormColor('#003300');
      setMode('dark');
    }

  }
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
      setFormColor('#042743');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("The light mode has been enabled","success")
    }
  }
  return (
    <>
    <Navbar title="Text Utils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} settingMode={settingMode}/>
    <Alert alert={alert}/>
    <TextForm heading="Enter the text to Analyze" placeholder="Enter here" mode={mode} showAlert={showAlert} formColor={formColor}/>
    {/* <About/> */}
    </>
  );
}

export default App;
