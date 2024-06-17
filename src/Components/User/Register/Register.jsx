import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Signup() {

  const [ output , setoutput ] = useState();
  const [ name , setname ] = useState();
  const [ email , setemail ] = useState();
  const [ password , setpassword ] = useState();

  const handlesumbit=()=>{
    const userdetails={"name":name,"email":email,"password":password }
    // console.log(userdetails)
    axios.post("http://localhost:3001/user/save",userdetails).then((result)=>{
      setoutput("successfully")
      setname("")
      setemail("")
      setpassword("")
      console.log(result)
    }).catch((error)=>{
      setoutput("Sign Up failed")
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
    <h1>Sign Up</h1>
    <div className="user">
      <input type="text" name="username" id="username" placeholder="Full Name" value={name} onChange={e =>setname(e.target.value)}/>
      <i className="fas fa-user"></i>
      <input type="text" name="email" id="email" placeholder="Email Address" value={email} onChange={e =>setemail(e.target.value)}/>
      <i className="fas fa-envelope"></i>
 
      <input type="password" name="password" id="password" placeholder="Password" value={password} onChange={e =>setpassword(e.target.value)}/>
      <i className="fas fa-unlock-alt"></i>
      {/* <i className="fas fa-unlock-alt"></i>
      <input type="password" name="confirm-password" id="confirm-password" placeholder="Confirm Password"/> */}
    </div>
      {output}
    <div className="login-btn">
      <button className="btn_class" onClick={handlesumbit}>Submit</button>
      <p className="signup">Already have an account ? <Link to="/login"><span>Log In</span></Link></p>
    </div>
  </div>
</div>
</div>
{/* <!-- partial --> */}
  </div>
  </>
  )
}

export default Signup
