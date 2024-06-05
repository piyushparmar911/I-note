import React from 'react'
import { Link, useLocation,useNavigate  } from 'react-router-dom';
const Navbar = () => {
  let location = useLocation();
  const history = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    history("/login");
  };
  
  return (
<nav className="navbar navbar-expand-lg bg-light  navbar-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">I-note</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto  mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname=== "/"? "active" : ""} `} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link  ${location.pathname=== "/About"? "active" : ""}`} to="/About">About</Link>
        </li>
      </ul>
    </div>
    
 {!localStorage.getItem('token')?<form className='d-flex'>
<Link type="button" to="/Login" className="btn btn-dark mx-2">Login</Link>
<Link type="button" to="/SignUp" className="btn btn-dark mx-2">Signup</Link>
 </form>:<button  onClick={handleLogout} className="btn btn-dark mx-2">Logout</button>
}   
  </div>
  </nav>
  )
}

export default Navbar

