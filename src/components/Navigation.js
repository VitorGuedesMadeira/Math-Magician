import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navigation">
    <span>Math Magician</span>
    <ul>
      <li>
        <Link to="/" className="links">Home</Link>
      </li>
      <li>
        <Link to="/Calculator" className="links">Calculator</Link>
      </li>
      <li>
        <Link to="/Quote" className="links">Quote</Link>
      </li>
    </ul>
  </nav>
);
export default Navbar;
