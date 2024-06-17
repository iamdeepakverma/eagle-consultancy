import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className="eg_footer">
     <footer className="footer">
  	 <div className="container">
  	 	<div className="row">
           <div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
  	 				<a href="#"><i className="fab fa-facebook-f"></i></a>
  	 				<a href="#"><i className="fab fa-twitter"></i></a>
  	 				<a href="#"><i className="fab fa-instagram"></i></a>
  	 				<a href="#"><i className="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Quick Links</h4>
  	 			<ul>
  	 				<li><a href="#">Home</a></li>
  	 				<li><a href="#">About us</a></li>
  	 				<li><a href="#">Apply Now</a></li>
  	 				<li><a href="#">Enquiry</a></li>
  	 				<li><a href="#">Contact us</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Apply Jobs</h4>
  	 			<ul>
  	 				<li> <Link to="Microsoft-Office-Job">Microsoft Office Job</Link></li>
  	 				<li><Link to="Data-Entry">Data Entry Job</Link></li>
  	 				<li><Link to="SMS-Sending-Job">SMS Sending Job</Link></li>
  	 				<li><Link to="Email-Sending-Job">Email Sending Job</Link></li>
  	 				<li><Link to="Capatcha-Job">Capatcha Entry Job</Link></li>
  	 				<li><Link to="Form-Filling-Job"> Form Filling Job</Link></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Contact Us</h4>
  	 			<ul>
  	 				<li><i className='fa fa-map-marker'></i><span> Omega 2nd, NRI City, Plot No-105, 3rd Floor, Greater Noida, Uttar Pradesh 201301.</span></li>
  	 				<li><i className='fa fa-envelope'></i><span> info@hmcnetworking.in</span></li>
  	 			</ul>
  	 		</div>
  	 		
  	 	</div>
  	 </div>
  </footer>
  </div>
    </>
  )
}

export default Footer
