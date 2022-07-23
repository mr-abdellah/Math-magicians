import '../styles/Navbar.css';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h3>Math Magicians</h3>
      <ul className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/calculator">Calculator</NavLink>
        <NavLink to="/quote">Quote</NavLink>
      </ul>
    </nav>
  );
}
