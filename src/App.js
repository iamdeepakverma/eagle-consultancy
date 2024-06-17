import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


// import Navigation from './Navigation';

import Home from "./Pages/Home";
import Nav from "./Pages/Nav";
import Getintouch from './Pages/Getintouch';
import Footer from './Pages/Footer';
import Login from './Components/User/Login/Login';
import Signup from './Components/User/Register/Register';
import MicrosoftOfficeJob from './Components/User/Services/MicrosoftOfficeJob';
import Dataentery from './Components/User/Services/dataentery';
import SMSSendingJob from './Components/User/Services/SMSSendingJob';
import EmailSendingJob from './Components/User/Services/EmailSendingJob';
import CaptchaEntryJob from './Components/User/Services/CaptchaEntryJob';
import FormFillingJob from './Components/User/Services/FormFillingJob';
import Contact from './Components/User/Contact/Contact';
import ApplyNow from './Components/User/ApplyNow/ApplyNow';
import About from './Components/User/About/About';
import Alljobs from './Components/User/allJobs/alljobs';
import SignUpFirst from './Components/User/SingUpFirst/SignUpFirst';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          {/* <Route path='/contact' element={<Contact />} /> */}
            {/* <Route path='/signup' element={
              <React.Fragment>
            <Signup />
            <Footer />
            </React.Fragment>
            } /> */}
          <Route path='/login' element={<Login/>} />
          {/* <Route path='/admin' element={<Admin />} /> */}
          {/* <Route path='/user' element={<User />} /> */}
          {/* <Route path='/:id' element={<PageTitle />} /> */}
          <Route path='/getintouch' element={<Getintouch/>} />
          {/* <Route path='/ApplyNow' element={<ApplyNow/>} /> */}
          {/* <Route path='/Logout' element={<Logout/>} /> */}
          {/* <Route path='/Manageusers' element={<Manage/>} /> */}
          {/* <Route path='/Manageusers' element={<Admin/>} /> */}
          <Route path='/MicrosoftOfficeJob' element={<MicrosoftOfficeJob/>}></Route>
          <Route path='/Dataentery' element={<Dataentery/>}></Route>
          <Route path='/SMSSendingJob' element={<SMSSendingJob/>}></Route>
          <Route path='/EmailSendingJob' element={<EmailSendingJob/>}></Route>
          <Route path='/CaptchaEntryJob' element={<CaptchaEntryJob/>}></Route>
          <Route path='/FormFillingJob' element={<FormFillingJob/>}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
          <Route path='/ApplyNow' element={<ApplyNow/>}></Route>
          <Route path='/About' element={<About/>}></Route>
          <Route path='/Alljobs' element={<Alljobs/>}></Route>
          <Route path='/SignUpFirst' element={<SignUpFirst/>}></Route>

        </Routes>
      <Footer/>
      </BrowserRouter>
      
    </>
  );
}

export default App;
