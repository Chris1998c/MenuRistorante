import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'; // Assicurati di avere un logo

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <div className="barra"></div>
        <img src={logo} alt="Restaurant Logo" className="logo" />
      </Link>
    </header>
  );
};

export default Header;
