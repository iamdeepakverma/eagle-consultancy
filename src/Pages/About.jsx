import React from 'react'

function About() {
  return (
   <>
   <div className="container">
    <div className="py-5 dt_About_page">
        <div className="left_img">
            <img src="assets/images/about.jpg" alt="" />
        </div>
        <div className="right_img">
            <div className="inner_text">
                <h5 style={{"color":"#28B463"}}>ABOUT</h5>
                <h1>Lorem ipsum dolor <br/><span >WORK ME</span>.</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus reiciendis rerum ipsa expedita dolore, iusto quam voluptates molestias aliquam est.</p>
            </div>
            <div className="inner_btn_class">
                <button className="btn_class">Read More</button>
            </div>
        </div>
    </div>
   </div>
   </>
  )
}

export default About
