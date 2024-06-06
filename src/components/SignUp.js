import React, {useState} from 'react'
import { useNavigate } from'react-router-dom';
const SignUp = (props) => {
  const   [cred, setCred] = useState({name: "",email: "", password: ""});
  let history = useNavigate();
  const handleSubmit =  async (e) => {
    e.preventDefault();
        const response = await fetch('http://localhost:5000/api/auth/createuser', {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
              "Content-Type": "application/json"
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({name: cred.name, email: cred.email,password: cred.password})});
            const json = await response.json();
            console.log(json);
            if (json.success) {
              // redirect to notepage
              localStorage.setItem('token',json.authtoken);
             history("/");
             props.showAlert("Signed Up Successfully","Success", "success");
            }
            else {
              props.showAlert("not valid", "error","danger");
            }
          }
          const onChange= (e) =>{
            setCred({...cred, [e.target.name]: e.target.value});
        }
          
  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>

    <div className="form-group m-3">
    <label htmlFor="name">Name</label>
    <input type="text" className="form-control" name="name"  value={cred.name} onChange={onChange} id="name" aria-describedby="emailHelp" placeholder="Enter Name"/>
    </div>
    <div className="form-group m-3">
    <label htmlFor="email">Email address</label>
    <input type="email" className="form-control" name="email" onChange={onChange} value={cred.email} id="email" aria-describedby="emailHelp" placeholder="Enter email" required/>
    
  </div>
  <div className="form-group m-3">
    <label htmlFor="password">Password</label>
    <input type="password" className="form-control" name="password" onChange={onChange} value={cred.password} id="password" placeholder="Password" minLength={4} required/>
  </div>
  <div className="form-group m-3">
    <label htmlFor="cpassword">Confirm Password</label>
    <input type="password" className="form-control" id="cpassword" placeholder="Confirm Password" minLength={3} required/>
  </div>
  <button type="submit" disabled={cred.password.length<=3} className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default SignUp
