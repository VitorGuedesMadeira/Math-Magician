import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <nav className="navigation navBar">
      <span>
        <a className="logo" href="/">
          Math Magician
        </a>
      </span>
      <ul className={`menuNav ${navbarOpen ? ' showMenu' : ''}`}>
        <li>
          <NavLink
            to="/"
            activeClassName="active-link"
            className="links"
            onClick={() => closeMenu()}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="Calculator"
            activeClassName="active-link"
            className="links"
            onClick={() => closeMenu()}
          >
            Calculator
          </NavLink>
        </li>
        <li>
          <NavLink
            to="Quote"
            activeClassName="active-link"
            className="links"
            onClick={() => closeMenu()}
          >
            Quote
          </NavLink>
        </li>
      </ul>
      <button type="button" onClick={handleToggle}>
        {navbarOpen ? (
          <MdClose style={{ color: '#fff', width: '40px', height: '40px' }} />
        ) : (
          <FiMenu style={{ color: '#7b7b7b', width: '40px', height: '40px' }} />
        )}
      </button>
    </nav>
  );
};
export default Navbar;
