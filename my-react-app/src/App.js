import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div className="App">

      <Navbar /> 

      <Routes>
        <Route path="/" element={<h1>Головна сторінка</h1>} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;

