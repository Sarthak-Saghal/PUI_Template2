import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import { Error } from './Pages/Error';

import { Careers } from './Pages/Careers';

export default function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Careers />} />
        
        <Route path="/error" element={<Error/>}/>
        <Route path="*" element={<Error />} />

      </Routes>
    </BrowserRouter>
  );
}
