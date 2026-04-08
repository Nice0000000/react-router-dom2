import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage'; 

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
};

export default AppRoutes;
