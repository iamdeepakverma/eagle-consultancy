import React from 'react'
import CountUp from 'react-countup';


function Counter() {
  return (
    <>
    <div className="container">
   <div className="row">
    <div className="col-12">
    <div className="inner_count_conatainer">
    <CountUp start={0} end={100} duration={3.75}>
  {({ countUpRef, start }) => (
    <div>
    <div className="counter_main_container">
        <div className="counter_inner_box">
            <div className="img_div">
            <i className="fa-solid fa-earth-americas"></i>
            </div>
            <div className="heading_tag">
                <p>JOBS</p>
                <div>
                <span ref={countUpRef}/><span className="count_letter">+</span>
                </div> 
               </div>
        </div>
    </div>
    </div>
  )}
</CountUp>
    <CountUp start={0} end={150} duration={3.75}>
  {({ countUpRef, start }) => (
    <div>
    <div className="counter_main_container">
        <div className="counter_inner_box">
            <div className="img_div">
            <i className="fa-regular fa-user"></i>
            </div>
            <div className="heading_tag">
                <p>INDUSTRY</p>
                <div>
                <span ref={countUpRef}/><span className="count_letter">+</span>
                </div>            </div>
        </div>
    </div>
    </div>
  )}
</CountUp>
    <CountUp start={0} end={200} duration={3.75}>
  {({ countUpRef, start }) => (
    <div>
    <div className="counter_main_container">
        <div className="counter_inner_box">
            <div className="img_div">
            <i className="fa-solid fa-briefcase"></i>
            </div>
            <div className="heading_tag">
                <p>RESUME RESIVED</p>
                <div>
                <span ref={countUpRef}/><span className="count_letter">+</span>
                </div>            </div>
        </div>
    </div>
    </div>
  )}
</CountUp>
    <CountUp start={0} end={250} duration={3.75}>
  {({ countUpRef, start }) => (
    <div>
    <div className="counter_main_container">
        <div className="counter_inner_box">
            <div className="img_div">
            <i className="fa-solid fa-headphones" ></i>
            </div>
            <div className="heading_tag">
                <p>HAPPY CLIENTS</p>
                <div>
                <span ref={countUpRef}/><span className="count_letter">+</span>
                </div>
            </div>
        </div>
    </div>
    </div>
  )}
</CountUp>
    </div>
    </div>
   </div>
    </div>
    </>
  )
}

export default Counter
