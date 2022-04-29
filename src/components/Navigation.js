import { NavLink } from 'react-router-dom';
import './pages.css';
import user from '../assets/user.svg';

const Navbar = () => (
  <nav>
    <ul>
      <li>
        <NavLink className="logo" to="/bookstore">
          Bookstore CMS
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="/bookstore"
        >
          BOOKS
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="/categories"
        >
          CATEGORIES
        </NavLink>
      </li>
    </ul>
    <NavLink
      className={({ isActive }) => (isActive ? 'active' : '')}
      to="/bookstore"
    >
      <figure>
        <img className="user-icon" src={user} alt="user settings" />
      </figure>
    </NavLink>
  </nav>
);

export default Navbar;
