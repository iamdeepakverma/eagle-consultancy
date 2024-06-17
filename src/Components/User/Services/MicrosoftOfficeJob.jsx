import React from "react";
import Alljobs from "../allJobs/alljobs";
import SignUpFirst from "../SingUpFirst/SignUpFirst";
// import { useParams } from "react-router-dom";
// import Alljobs from "../allJobs/alljobs";

function MicrosoftOfficeJob() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="all_main_div">

          <div className="col-lg-7 col-md-6 col-12">
         <div className="inner_div">
         <h1>Microsoft Office Job</h1>
              <img src="assets/images/office_job.jpg" alt="" />
              &nbsp;
              <p>If you have any type of experience in Ms.office.</p>
              <h5>You can start this job work from home.</h5>
              <p>
                We wish you all the best in finding new opportunities for online
                Microsoft Office Jobs!
              </p>
              <p>
                {" "}
                <span> Salary :-</span>25000 monthly.
              </p>
              <p>
                {" "}
                <span> Payout mode :-</span>Weekly, Half Monthly, Monthly
              </p>
              <p>
                <span>Work set up list</span>. Laptop, Desktop
              </p>
              <p>
                Any how person do this job like students, housewife, retired
                person, unemployed, graduate, 8th pass.
              </p>
              <p style={{ color: "#000" }}>reg fee-800/rupees.</p>
              <p>5 days training schedule by company.</p>
              <p>Training facility online or offline.</p>
              <p>1 hour training per day.for 5 days.</p>
              <SignUpFirst/> 
         </div>
          </div>
          <div className="col-lg-5 col-md-6 d">
            <Alljobs/>
          </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default MicrosoftOfficeJob;
