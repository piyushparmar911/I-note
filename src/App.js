import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import SignUP from "./components/SignUp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NoteState from "./context/notes/Notestate";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type,color) =>{
    setAlert ({
      message: message,
      type: type,
      color: color
  });
    setTimeout(() => {
      setAlert(null);
    }, 900);
  }

  return (
    <>
    <NoteState>

      <Router>
      <Navbar />
      <Alert alert={alert}/>
        <div className="container">
        <Routes>
          <Route exact path="/" element={<Home showAlert={showAlert} />} />
          <Route exact path="/about" element={<About showAlert={showAlert}/>} />
          <Route exact path="/login" element={<Login showAlert={showAlert}/>} />
          <Route exact path="/signup" element={<SignUP showAlert={showAlert}/>} />
        </Routes>
        </div>
      </Router>
    </NoteState>
    </>
  );
}

export default App;
