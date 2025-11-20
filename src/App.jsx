import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import { Errorpage } from './Pages/Errorpage';
import { Contact } from './Pages/Contact';
import { Portfolio } from './Pages/Portfolio';
import { Resume } from './Pages/Resume';
import { Skill } from './Pages/skill';
import { Testimonials } from './Pages/Testimonials';


export default function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Careers />} />
        
        <Route path="/error" element={<Errorpage/>}/>
       
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/resume" element={<Resume/>}/>
        <Route path="/skill" element={<Skill/>}/>
        <Route path="/testimonials" element={<Testimonials/>}/>

         <Route path="*" element={<Errorpage/>} />

      </Routes>
    </BrowserRouter>
  );
}
