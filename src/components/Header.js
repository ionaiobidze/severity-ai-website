import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <span className="logo-text">Severity AI</span>
          </Link>
        </div>

        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <i className={isMobileMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </button>

        <nav className={isMobileMenuOpen ? "open" : ""}>
          <ul>
            <li>
              <Link to="/" onClick={toggleMobileMenu} className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/features" onClick={toggleMobileMenu} className="nav-link">
                Features
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMobileMenu} className="nav-link">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;