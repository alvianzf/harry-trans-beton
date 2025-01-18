import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import Hamburger from './Hamburger';

interface NavbarProps {
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage }) => {

  const getClassName = (page: string) => (
    currentPage === page ? 'nav-item active' : 'nav-item'
  );

  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
        <span>Harry Trans Beton</span>
      </div>

      <div className="nav">
        <Link className={getClassName("Home")} to="/">Home</Link>
        <Link className={getClassName("about")} to="/about">About Us</Link>
        <Link className={getClassName("contact")} to="/contact">Contact Us</Link>
      </div>
      <Hamburger />
    </div>
  );
};

export default Navbar;
