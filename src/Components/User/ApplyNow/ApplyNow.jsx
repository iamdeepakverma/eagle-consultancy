import React, { useState } from "react";
import "./Apply.css";

function ApplyNow() {
  
  const [ name , setName ] = useState()
  const [ email , setEmail ] = useState()
  const [ contact , setContact ] = useState()
  const [ job , setjob ] = useState()
  const [ state , setState] = useState()
  const [ address , setaddress ] = useState()
  const [ place , setPlace ] = useState()
  const [ pincode , setPincode ] = useState()

  return (
    <>

      <div className="container apllyNow_eg_container">
        <div className="content-area ">
          <div className="col-md-8 float-left">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-12">
                <div className="contact-right">
                  <div className="top-content pb-4">
                    <h3>Apply Now</h3>
                  </div>
                  <form>
                    <div className="contact-form">
                      <div className="row">
                        <div className="col-lg-6 col-md-12 col-12">
                          <div className="form-group">
                            <input
                              type="text"
                              name="name"
                              placeholder="Full Name *"
                              required="required"
                              value={name} onChange={e =>setName(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                          <div className="form-group">
                            <input
                              type="email"
                              name="email"
                              placeholder="Email *"
                              required="required"
                              value={email} onChange={e =>setEmail(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                          <div className="form-group">
                            <input
                              type="text"
                              name="phone"
                              placeholder="Contact No. *"
                              required="required"
                              value={contact} onChange={e =>setContact(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-12">
                          <div className="form-group">
                            <select className="form-control" name="job">
                              <option selected="" disabled="" value={job} onChange={e =>setjob(e.target.value)}>
                                Select Job
                              </option>
                              <option value="Microsoft Office Job">
                                Microsoft Office Job
                              </option>
                              <option value="Data Entry Job">
                                Data Entry Job
                              </option>
                              <option value="SMS Sending Job">
                                SMS Sending Job
                              </option>
                              <option value="Email Sending Job">
                                Email Sending Job
                              </option>
                              <option value="Capatcha Entry Job">
                                Capatcha Entry Job
                              </option>
                              <option value="Form Filling Job">
                                Form Filling Job
                              </option>
                            </select>
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-12">
                          <div className="form-group">
                            <select className="form-control" name="state">
                              <option value={state} onChange={e =>setState(e.target.value)} >Please Select State</option>
                              <option value="Andaman and Nicobar Islands" >
                                Andaman and Nicobar Islands
                              </option>
                              <option value="Andhra Pradesh">
                                Andhra Pradesh
                              </option>
                              <option value="Arunachal Pradesh">
                                Arunachal Pradesh
                              </option>
                              <option value="Assam">Assam</option>
                              <option value="Bihar">Bihar</option>
                              <option value="Chandigarh">Chandigarh</option>
                              <option value="Chhattisgarh">Chhattisgarh</option>
                              <option value="Dadra and Nagar Haveli">
                                Dadra and Nagar Haveli
                              </option>
                              <option value="Daman and Diu">
                                Daman and Diu
                              </option>
                              <option value="Delhi">Delhi</option>
                              <option value="Goa">Goa</option>
                              <option value="Gujarat">Gujarat</option>
                              <option value="Haryana">Haryana</option>
                              <option value="Himachal Pradesh">
                                Himachal Pradesh
                              </option>
                              <option value="Jammu and Kashmir">
                                Jammu and Kashmir
                              </option>
                              <option value="Jharkhand">Jharkhand</option>
                              <option value="Karnataka">Karnataka</option>
                              <option value="Kerala">Kerala</option>
                              <option value="Lakshadweep">Lakshadweep</option>
                              <option value="Madhya Pradesh">
                                Madhya Pradesh
                              </option>
                              <option value="Maharashtra">Maharashtra</option>
                              <option value="Manipur">Manipur</option>
                              <option value="Meghalaya">Meghalaya</option>
                              <option value="Mizoram">Mizoram</option>
                              <option value="Nagaland">Nagaland</option>
                              <option value="Odisha">Odisha</option>
                              <option value="Puducherry">Puducherry</option>
                              <option value="Punjab">Punjab</option>
                              <option value="Rajasthan">Rajasthan</option>
                              <option value="Sikkim">Sikkim</option>
                              <option value="Tamil Nadu">Tamil Nadu</option>
                              <option value="Telangana">Telangana</option>
                              <option value="Tripura">Tripura</option>
                              <option value="Uttarakhand">Uttarakhand</option>
                              <option value="Uttar Pradesh">
                                Uttar Pradesh
                              </option>
                              <option value="West Bengal">West Bengal</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                          <div className="form-group">
                            <input
                              type="text"
                              name="address"
                              placeholder="Address"
                              required="required"
                              value={address} onChange={e =>setaddress(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                          <div className="form-group">
                            <input type="text"
                              name="district"
                              placeholder="District *"
                              required="required"
                              value={place} onChange={e =>setPlace(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                          <div className="form-group">
                            <input
                              type="text"
                              name="pincode"
                              placeholder="Pin Code *"
                              required="required"
                              value={pincode} onChange={e =>setPincode(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-12">
                          <div className="form-group contact-button">
                            <button
                              name="Apply"
                              type="submit"
                              className="btn_class"
                            >
                              submit now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="">
              {/* <!-- Number --> */}

              <div className="service-img">
                <img src="assets\images\baner-img.jpg" alt="#" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ApplyNow;
