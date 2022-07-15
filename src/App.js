import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About' 
import { Routes, Route, } from "react-router-dom";

function App () {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  } 

  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#00157f';
      showAlert("Dark mode has been enabled", "success");
      document.title ='Softa Textutils Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title ='Softa Textutils Light Mode';
    }
  }
  return (
    <>
      <Navbar title="Softa TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <Routes>
        <Route exact path="/reactlivewebsite" element={<TextForm showAlert={showAlert} heading="Enter Text to Analyze Below" mode={mode}/>} />
        <Route exact path="/about" element={<About/>} />
      </Routes>
    </>
  );
}

export default App;
