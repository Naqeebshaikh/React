import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { useState } from 'react';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  const [mode,setMode]=useState("dark");
  const [modeText,setModeText]=useState("Enable Light mode")
  const [textColor,setTextColor]=useState("light")
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null)
      }, 3000);
  }

let  togglemode=()=>{
      if(mode==="light")
        {
          setMode("dark")
          setModeText("Enable light mode")
          setTextColor("light")
          document.body.style.backgroundColor="grey"
          showAlert("Dark mode has been enabled","success")
        }
        else
        {
          setMode("light")
          setModeText("Enable dark mode")
          setTextColor("dark")
          document.body.style.backgroundColor="white"
          showAlert("Light mode has been enabled","success")

        }
  }
  return (
    <>
    <Router>
  <Navbar title="TextUtils1" aboutText="About-Text-utils" mode={mode} togglemode={togglemode} modeText={modeText} textColor={textColor}/>
  <Alert alert={alert}/>
  {/* <Navbar /> */}
  <div className="container my-3">
 
          <Route exact path="/about">
            <About />
          </Route>
          
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
          </Route>
   
  {/* <About/> */}
 
  </div>
  </Router>
  
    </>
    
  );
}

export default App;
