import React from 'react';
import './Footer.css';
import gplayStore from '../../assets/googleplaystore.png'
import iosplayStore from '../../assets/App_Store_(iOS).svg.png'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Download App:</h3>
        <div className="app-icons">
          <img src={gplayStore} alt="Google Play Store" />
          <img src={iosplayStore} alt="iOS App Store" />
        </div>
      </div>
      <div className="footer-section">
        <p>© Copyright 2024</p>
      </div>
      <div className="footer-section important-section">
          <span>About Us</span>
          <span>Privacy Pospancy</span>
          <span>Sitemap</span>
          <span>Careers</span>
          <span>Help Center</span>
      </div>
      <div className="footer-section">
        <ul className="social-icons">
          <li><a href="#"><i className="fab fa-facebook">A</i></a></li>
          <li><a href="#"><i className="fab fa-instagram">B</i></a></li>
          <li><a href="#"><i className="fab fa-linkedin">C</i></a></li>
          <li><a href="#"><i className="fab fa-twitter">D</i></a></li>
          <li><a href="#"><i className="fab fa-youtube">E</i></a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
