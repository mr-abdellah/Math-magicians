import '../styles/Navbar.css';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h3>Math Magicians</h3>
      <ul className="nav-links">

        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/calculator">Calculator</NavLink>
        </li>

        <li>
          <NavLink to="/quote">Quote</NavLink>
        </li>
      </ul>
    </nav>
  );
}
