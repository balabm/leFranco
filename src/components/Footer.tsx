const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__brand">
            <h3>Le Franco.in</h3>
            <p>
              A premier cultural and cinematic platform celebrating the transformative 
              power of film and media through prestigious awards and festivals.
            </p>
            <div className="footer__location">
              <span className="icon">📍</span>
              <span>Pondicherry, India</span>
            </div>
          </div>

          <div className="footer__links">
            <div className="footer__section">
              <h4>Festival</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#events">Events & Awards</a></li>
                <li><a href="#future">Future Plans</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer__section">
              <h4>Participate</h4>
              <ul>
                <li><a href="mailto:submissions@lefranco.in">Submit Film</a></li>
                <li><a href="mailto:partnership@lefranco.in">Partnerships</a></li>
                <li><a href="mailto:media@lefranco.in">Media Inquiries</a></li>
                <li><a href="mailto:sponsor@lefranco.in">Sponsorship</a></li>
              </ul>
            </div>

            <div className="footer__section">
              <h4>Connect</h4>
              <ul>
                <li><a href="mailto:info@lefranco.in">info@lefranco.in</a></li>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__copyright">
            <p>&copy; 2025 Le Franco.in. All rights reserved.</p>
          </div>
          <div className="footer__credits">
            <p>Celebrating creativity • Nurturing talent • Building cultural bridges</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;