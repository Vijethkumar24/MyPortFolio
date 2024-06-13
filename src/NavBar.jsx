import React, { useState } from 'react';
import './NavBar.css';

function NavBar({ setCurrentComponent }) {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const handleHamburgerClick = () => {
    setIsMenuActive(!isMenuActive);
  };

  const closeMenu = (component) => {
    setIsMenuActive(false);
    setCurrentComponent(component);
  };

  return (
    <header className="header">
      <div className="logo">
        {/* <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Space Mission Logo" /> */}
        <h1>VKPortFolio</h1>
      </div>
      <nav>
        <ul className={`nav-menu ${isMenuActive ? 'active' : ''}`}>
          <li className="nav-item"><a className="nav-link" href="#home" onClick={() => closeMenu('home')}>HOME</a></li>
          <li className="nav-item"><a className="nav-link" href="#project" onClick={() => closeMenu('projects')}>PROJECT</a></li>
          <li className="nav-item"><a className="nav-link" href="#achievement" onClick={() => closeMenu('achievements')}>ACHIEVEMENT</a></li>
          <li className="nav-item"><a className="nav-link" href="#skills" onClick={() => closeMenu('skills')}>SKILLS</a></li>
          <li className="nav-item"><a className="nav-link" href="#contactme" onClick={() => closeMenu('contact')}>CONTACT ME</a></li>
        </ul>
        <div className="hamburger" onClick={handleHamburgerClick}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
