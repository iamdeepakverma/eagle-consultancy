import React from "react";
import Hamburger from "hamburger-react";
import { useState} from "react";
import {  NavLink } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

function Nav() {

const [isOpen, setOpen] = useState(false);
//   const [ Navbar , setNavbar ] = useState();

  return (
    <>
    <div className="eg_main_section">
        <div className="eg_inner_section">
          <nav>
            <div className="eg_nav">
              <div className="eg_logo">
                <img src="assets/images/eaglle-eg.png" alt="" />
              </div>
              <div className="eg_all_button">
                <div className="eg_menu">
                  <ul>
                    <li>
                      <NavLink style={{ color: "#28B463" }} to="/home">
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/About">About Us</NavLink>
                    </li>
                    <li>
                      <NavLink to="">Jobs<IoIosArrowDown /></NavLink>
                      <ul>
                        <li><NavLink to="/MicrosoftOfficeJob">Microsoft Office Job</NavLink></li>
                        <li><NavLink to="/Dataentery">Data Entry Job</NavLink></li>
                        <li><NavLink to="/SMSSendingJob">SMS Sending Job</NavLink></li>
                        <li><NavLink to="/EmailSendingJob">Email Sending Job</NavLink></li>
                        <li><NavLink to="/CaptchaEntryJob">Capatcha Entry Job</NavLink></li>
                        <li><NavLink to="/FormFillingJob">Form Filling Job</NavLink></li>
                      </ul>
                    </li>
                    <li>
                      <NavLink to="/ApplyNow">Apply Now</NavLink>
                    </li>
                    <li>
                      <NavLink to="/Contact">Contact</NavLink>
                    </li>
                  </ul>
                </div>
                <div className="eg_button">
                  <button className="btn_class text-white"><NavLink className=" text-white" to="/signup">Sign Up</NavLink></button>
                  <button className="class_btn"><NavLink className=" text-black" to="/login">Login</NavLink></button>

                </div>
                <Hamburger toggled={isOpen} toggle={setOpen} size={30} />
                {isOpen && (
                  <div className="dropdown-menu">
                    <ul  >
                      <li onClick={()=>setOpen(false)}><NavLink style={{ color: "#28B463" }} to="/" >Home</NavLink></li>
                      <li onClick={()=>setOpen(false)} ><NavLink to="">About Us</NavLink></li>
                      <li ><NavLink to="">Jobs<IoIosArrowDown /></NavLink>
                        <ul  onClick={()=>setOpen(false)}>
                          <li><NavLink to="/MicrosoftOfficeJob">Microsoft Office Job</NavLink></li>
                          <li><NavLink to="Data-Entry">Data Entry Job</NavLink></li>
                          <li><NavLink to="SMS-Sending-Job">SMS Sending Job</NavLink></li>
                          <li><NavLink to="Email-Sending-Job">Email Sending Job</NavLink></li>
                          <li><NavLink to="Capatcha-Job">Capatcha Entry Job</NavLink></li>
                          <li><NavLink to="Form-Filling-Job">Form Filling Job</NavLink></li>
                        </ul>
                      </li >
                      <li onClick={()=>setOpen(false)}><NavLink to="/getintouch">Apply Now</NavLink></li>
                      <li onClick={()=>setOpen(false)}><NavLink to="contact">Contact</NavLink></li>                  
                    </ul>
                    <div onClick={()=>setOpen(false)}  className="phone_menu">
                   <NavLink className=" text-white" to="/signup"> <button className="btn_class text-white">Sign Up</button></NavLink>
                  <button className="class_btn"><NavLink className=" text-white" to="/login">Login</NavLink></button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* <div></div> */}
          </nav>
        </div>
      </div>
    </>
  );
}

export default Nav;
