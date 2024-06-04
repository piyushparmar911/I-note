import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import SignUP from "./components/SignUp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NoteState from "./context/notes/Notestate";

function App() {
  return (
    <>
    <NoteState>

      <Router>

      <Navbar />
        <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUP />} />
        </Routes>
        </div>
      </Router>
    </NoteState>
    </>
  );
}

export default App;
