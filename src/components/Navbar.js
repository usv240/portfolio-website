import React, { useState } from 'react';
import { Link } from 'react-scroll'; // For smooth scrolling between sections
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger menu - always visible */}
      <div className={`${styles.hamburger} ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>

        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Sidebar Navigation */}
      <nav className={`${styles.navbar} ${isOpen ? styles.showMenu : ''}`}>
        <ul className={styles.navList}>
          <li><Link to="home" smooth={true} duration={500} onClick={toggleMenu}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500} onClick={toggleMenu}>About</Link></li>
          <li><Link to="skills" smooth={true} duration={500} onClick={toggleMenu}>Skills</Link></li>
          <li><Link to="experience" smooth={true} duration={500} onClick={toggleMenu}>Experience</Link></li>
          <li><Link to="projects" smooth={true} duration={500} onClick={toggleMenu}>Projects</Link></li>
          <li><Link to="education" smooth={true} duration={500} onClick={toggleMenu}>Education</Link></li>
          <li><Link to="contact" smooth={true} duration={500} onClick={toggleMenu}>Contact</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
