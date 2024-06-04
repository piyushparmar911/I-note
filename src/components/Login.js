import React, { useState } from 'react'
import { useHref,Link } from 'react-router-dom';

const Login = () => {
  const   [cred, setCred] = useState({email: "", password: ""});
  let history = useHref("/");
  const handleSubmit =  async (e) => {
    e.preventDefault();
        const response = await fetch('http://localhost:5000/api/auth/login', {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
              "Content-Type": "application/json"
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({email: cred.email,password: cred.password})});
            const json = await response.json();
            console.log(json);
            if (json.success) {
              // redirect to notepage
              localStorage.setItem('token',json.authtoken);
              return <Link to={history}></Link>
            }
            else {
              alert("not valid");
            }
          }
          const onChange= (e) =>{
            setCred({...cred, [e.target.name]: e.target.value});
        }
          
            

    return (
      <div>
      <form onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="email">Email address</label>
    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={cred.email} name="email"  onChange={onChange} placeholder="Enter email"/>
    
  </div>
  <div className="form-group">
    <label htmlFor="Password">Password</label>
    <input type="password" className="form-control" id="password" aria-describedby="emailHelp" value={cred.password} name="password"  onChange={onChange} placeholder="Enter Password"/>

  </div>
  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
    </div>
  )
}

export default Login
