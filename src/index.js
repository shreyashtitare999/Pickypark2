import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Index from './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginAttendent from './pages/attendent/LoginAttendent';
import LoginOwner from './pages/owner/LoginOwne';
import Home from './pages/user/Home';

import Reserve from './pages/user/Reserve';
import AttendentDash from './pages/attendent/AttendentDash';
import OwnerDash from './pages/owner/OwnerDash';
import Booking from './pages/user/Booking';
import RegistrationAttendent from './pages/attendent/RegistrationAttendent';
import RegistrationOwner from './pages/owner/RegistrationOwne';
import Thankyou from './pages/user/ThankYou';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/loginattendent" element={<LoginAttendent />} />
        <Route path="/registerattendent" element={<RegistrationAttendent />} />
        <Route path="/attendentdash" element={<AttendentDash/>}/>
        <Route path="/registerowner" element={<RegistrationOwner />} />
        <Route path="/loginowner" element={<LoginOwner />} />
        <Route path="/ownerdash" element={<OwnerDash/>}/>
        <Route path='/home' element={<Home/>}/>
         <Route path='/thanks' element={<Thankyou/>}/>
         <Route path='/reserve' element={<Reserve/>}/>
         <Route path='/booking' element={<Booking/>}/>
      </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
