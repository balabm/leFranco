import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="nav-wrapper">
          <div className="logo">
            <div className="logo-icon">
              LF
            </div>
            <div className="logo-text">
              <h1>Le Franco.in</h1>
              <p className="tagline">Film Festival & Media Awards</p>
            </div>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav--open' : ''}`}>
            <ul className="nav__list">
              <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
              <li><a href="#events" onClick={() => setIsMenuOpen(false)}>Events</a></li>
              <li><a href="#awards" onClick={() => setIsMenuOpen(false)}>Awards</a></li>
              <li><a href="#future" onClick={() => setIsMenuOpen(false)}>Future</a></li>
              <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
            </ul>
          </nav>

          <button 
            className={`menu-toggle ${isMenuOpen ? 'menu-toggle--open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;