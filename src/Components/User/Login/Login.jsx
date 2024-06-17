import React from 'react'
import { Link , useNavigate } from "react-router-dom";
import { useState , useEffect } from 'react';
import axios from 'axios';

function Login() {
    const Navigate = useNavigate();
  const [ output , setoutput ] = useState();
  const [ email , setemail ] = useState();
  const [ password , setpassword ] = useState();

  const handlesumbit=()=>{
    const userdetails={"email":email,"password":password }
    console.log(userdetails)
    axios.post("http://localhost:3001/user/login",userdetails).then((result)=>{
      setoutput("successfully")
      setemail("")
      setpassword("")
      console.log(result)
      var obj=result.data.userDetails;
      localStorage.setItem("token",result.data.token);
      localStorage.setItem("_id",obj._id);
      localStorage.setItem("name",obj.name);
      localStorage.setItem("email",obj.email);
      localStorage.setItem("role",obj.role);
      localStorage.setItem("status",obj.status);
      if(obj.role=="admin")
        {
            Navigate("/admin")
            setoutput("admin")
        }
        else
        {
            Navigate("/user")
            setoutput("user")
        }
    }).catch((error)=>{
      setoutput("Login failed")
      console.log(error)
    })
  }
  return (
    <>
     <div className="eg_sign_up">
    <div className="eg_inner_sign_up">
  {/* <!-- partial:index.partial.html --> */}
<div className="container">
  <div className="box">
    <h1>Login</h1>
    <div className="user">
      <input type="text" name="email" id="email" placeholder="Email Address" value={email} onChange={(e) =>setemail(e.target.value)}/>
      <i className="fas fa-envelope"></i>
      <input type="password" name="password" id="password" placeholder="Password" value={password} onChange={(e) =>setpassword(e.target.value)}/>
      <i className="fas fa-unlock-alt"></i>
    </div>
      {output}
    <div className="login-btn">
      <button className="btn_class" onClick={handlesumbit}>Submit</button><br/>
      <p className="signup">Already have an account ? <Link to="/signup"><span>Sign Up</span></Link> </p>
    </div>
  </div>
</div>
</div>
{/* <!-- partial --> */}
  </div>
    </>
  )
}

export default Login
