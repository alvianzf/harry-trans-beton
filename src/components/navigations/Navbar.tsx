import React from 'react';
import logo from '../../assets/logo.png';
import Hamburger from './Hamburger';

interface NavbarProps {
  currentPage: string;
}
const Navbar: React.FC<NavbarProps> = ({currentPage}) => {

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
        <a className={getClassName("Home")} href="/">Home</a>
        <a className={getClassName("about")} href="/about">About Us</a>
        <a className={getClassName("services")} href="/servis">Projects</a>
        <a className={getClassName("operations")} href="/operaons">Operations</a>
        <a className={getClassName("contact")} href="/contact-us">Contact Us</a>
      </div>
      <Hamburger />

    </div>
  );
};

export default Navbar;
