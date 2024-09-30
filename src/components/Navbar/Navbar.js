import './Navbar.css';
import { NavLink } from 'react-router-dom';

export const Navbar = ({ loggedIn, setLoggedIn }) => {
  return (
    <div className="menu">
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <ul className="nav-links">
        {loggedIn ? (
          <>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li>
              <button onClick={() => setLoggedIn(false)}>Logout</button>
            </li>
          </>
        ) : (
          <li>
            <NavLink to="/auth">Login</NavLink>
          </li>
        )}
      </ul>
    </div>
  );
};
