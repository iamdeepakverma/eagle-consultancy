import React from "react";
import "./alljobs.css";
import { Link, useNavigate } from "react-router-dom";

function Alljobs() {
    const navigate = useNavigate();
    const handleNav1 = () => {
        navigate("/MicrosoftOfficeJob");
    }
    const handleNav2 = () => {
        navigate("/Dataentery");
    }
    const handleNav3 = () => {
        navigate("/EmailSendingJobC");
    }
    const handleNav4 = () => {
        navigate("/CaptchaEntryJob");
    }
    const handleNav5 = () => {
        navigate("/FormFillingJob");
    }
    const handleNav6 = () => {
        navigate("/SMSSendingJob");
    }
    
  return (
    <>
      <div className="eg_all_jobs">
        <div className="container">
          <h1>JOBS</h1>
          <ul>
            <li onClick={handleNav1}>Microsoft Office Job</li>
            <li onClick={handleNav2}>Data Entry Job</li>
  	 		<li  onClick={handleNav3}>Email Sending Job</li>
  	 		<li  onClick={handleNav4}>Captcha Entry Job</li>
  	 		<li  onClick={handleNav5}>Form Filling Job</li>
            <li  onClick={handleNav6}>SMS Sending Job</li>
          </ul>
        </div>
      </div>
      <div className="eg_all_jobs">
        <div className="container">
            <h4>Follow Us</h4>
        <div className="social-links">
  	 				<Link to=""><i className="fab fa-facebook-f"></i></Link>
  	 				<Link to=""><i className="fab fa-twitter"></i></Link>
  	 				<Link to=""><i className="fab fa-instagram"></i></Link>
  	 				<Link to=""><i className="fab fa-linkedin-in"></i></Link>
  	 			
  	 			</div>
        </div>
      </div>
    </>
  );
}

export default Alljobs;
