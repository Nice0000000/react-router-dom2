import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage'; // Перевірте шлях до файлу
// ... інші імпорти

const AppRoutes = () => {
  return (
    <Routes>
      {/* Ваші існуючі маршрути */}
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
};

export default AppRoutes;