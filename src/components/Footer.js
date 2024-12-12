import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-links">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className="social-icons">
          <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
          <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
        </div>
      </div>
      <div className="copyright">
        <p>© {new Date().getFullYear()} Severity AI. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;