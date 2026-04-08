import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        {/* Ваші існуючі посилання */}
        <li>
          <Link to="/contact">Контакти</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;