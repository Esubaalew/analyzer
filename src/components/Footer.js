import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Esubalew Chekol. All rights reserved.</p>
      <div className="footer-links">
        <a href="http://esube.com.et" target="_blank" rel="noopener noreferrer">Portfolio</a>
        <a href="http://azeb.esube.com.et" target="_blank" rel="noopener noreferrer">Azeb's App</a>
      </div>
    </footer>
  );
};

export default Footer;
