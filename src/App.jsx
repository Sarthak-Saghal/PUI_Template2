import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';


import { Careers } from './Pages/Careers';

export default function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Careers />} />
        <Route index element={<Careers />} />


      </Routes>
    </BrowserRouter>
  );
}
