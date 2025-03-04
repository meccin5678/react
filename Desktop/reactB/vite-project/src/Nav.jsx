import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.scss';

const Nav = ({ isFixed }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* ハンバーガーメニュー */}
      <div className="hum" onClick={toggleMenu}>
        <span className={isOpen ? "open" : ""}></span>
        <span className={isOpen ? "open" : ""}></span>
        <span className={isOpen ? "open" : ""}></span>
      </div>

      {/* PC用ナビ */}
      <nav className={isFixed ? "fixed-nav" : "pc-nav"}>
        <ul>
          <li><Link to="/">Top</Link></li>
          <li><Link to="/news">News</Link></li>
          <li><Link to="/company">Company</Link></li>
          <li><Link to="/service">Service</Link></li>
          <li><Link to="/recruit">Recruit</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* スマホ用ナビ */}
      <div className={`smart-nav ${isOpen ? "toggle" : ""}`}>
        <ul>
          <li><Link to="/" onClick={toggleMenu}>Top</Link></li>
          <li><Link to="/news" onClick={toggleMenu}>News</Link></li>
          <li><Link to="/company" onClick={toggleMenu}>Company</Link></li>
          <li><Link to="/service" onClick={toggleMenu}>Service</Link></li>
          <li><Link to="/recruit" onClick={toggleMenu}>Recruit</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Nav;