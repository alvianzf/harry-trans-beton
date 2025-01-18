import React from 'react';

const Hamburger = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="hamburger">
        <div className="menu-icon" onClick={toggleMenu}>
          <i className="fa fa-bars"></i>
        </div>
      {menuOpen && (
        <div className="menu">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Hamburger;
