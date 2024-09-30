import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';

export const Navbar = ({ loggedIn }) => {
  return (
    <nav>
      <Link
        to="/"
        className="title"
      >
        Website
      </Link>
      <div className="menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul>
        {loggedIn ? (
          <>
            <li>
              <NavLink to="/about">Home</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
          </>
        ) : (
          <li>
            <NavLink to="/auth">Login</NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};
