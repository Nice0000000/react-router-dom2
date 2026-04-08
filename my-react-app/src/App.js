import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Перевірте, чи файл у папці components
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div className="App">
      {/* Меню навігації буде відображатися на всіх сторінках */}
      <Navbar /> 

      {/* Тут контент буде змінюватися залежно від адреси */}
      <Routes>
        <Route path="/" element={<h1>Головна сторінка</h1>} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;

