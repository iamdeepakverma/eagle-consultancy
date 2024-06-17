import React from 'react'

function Getintouch() {
  return (
    <>
     <div className="home_background_image">
       <div className="container_contact_inner_in">
  <h2>Get in Touch</h2>
  <form>
    <div className="form-group">
      <label htmlFor="name">Full Name:</label>
      <input className='form-control'type="text" id="name" name="name" placeholder="Your name.."/>
    </div>
    <div className="form-group">
      <label  htmlFor="email">Email:</label>
      <input className='form-control' type="email" id="email" name="email" placeholder="Your email.."/>
    </div>
    <div className="form-group">
      <label htmlFor="phone">Contact No:</label>
      <input className='form-control' type="tel" id="phone" name="phone" placeholder="Your phone.."/>
    </div>
    <div className="form-group">
      <label htmlFor="job">Select Job:</label>
      <select className='form-control' id="job" name="job">
        <option value="job1">Job 1</option>
        <option value="job2">Job 2</option>
        <option value="job3">Job 3</option>
      </select>
    </div>
    <div className="form-group">
      <label htmlFor="message">Your Message:</label>
      <textarea className='form-control' id="message" name="message" placeholder="Write something.."></textarea>
    </div>
    <button className='btn_class'>Submit Now</button>
  </form>
</div>

     </div>
    </>
  )
}

export default Getintouch
