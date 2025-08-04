import React from 'react';

import NavBar from"./Component/NavBar.jsx";

import Home from"./pages/Home.jsx";
import Patient from"./pages/patient.jsx";
import Admin from"./pages/admin.jsx";
import AddPatient from './Component/AddPatient.jsx';

import { BrowserRouter,Routes,Route } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <BrowserRouter>
      
      <NavBar/>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/patients" element={<Patient/>}/>
        <Route path="/admin" element={<Admin/>} />
        <Route path="/patients/add" element={<AddPatient />} />

      </Routes>
      
      
      </BrowserRouter>

    </div>
  );
}
