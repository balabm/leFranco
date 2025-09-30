const About = () => {
  return (
    <section id="about" className="about parallax-section">
      <div className="container">
        <div className="section-header reveal-on-scroll">
          <h2>About Le Franco.in</h2>
          <p className="section-subtitle">
            A premier cultural and cinematic platform celebrating the transformative power of film and media
          </p>
        </div>

        <div className="about__content stagger-children">
          <div className="about__vision">
            <div className="card hover-zone">
              <h3>Our Vision</h3>
              <p>
                To position Pondicherry as a global hub for cinema and media arts, fostering an ecosystem 
                where filmmakers, artists, and media professionals can connect, collaborate, and inspire 
                the world through storytelling.
              </p>
            </div>
          </div>

          <div className="about__mission">
            <div className="card hover-zone">
              <h3>Our Mission</h3>
              <ul>
                <li>To celebrate outstanding achievements in cinema and media</li>
                <li>To create opportunities for emerging and established talent to gain recognition</li>
                <li>To promote cultural exchange by connecting Indian and international film communities</li>
                <li>To provide a prestigious stage for innovative voices to reach wider audiences</li>
              </ul>
            </div>
          </div>

          <div className="about__values">
            <div className="card hover-zone">
              <h3>Core Values</h3>
              <div className="values-grid">
                <div className="value tooltip" data-tooltip="Fostering bold storytelling">
                  <h4>Creativity</h4>
                  <p>Encouraging bold, unique, and powerful storytelling</p>
                </div>
                <div className="value tooltip" data-tooltip="Embracing global voices">
                  <h4>Diversity</h4>
                  <p>Celebrating voices from all cultures and backgrounds</p>
                </div>
                <div className="value tooltip" data-tooltip="Pursuing the highest standards">
                  <h4>Excellence</h4>
                  <p>Striving for the highest standards in every endeavor</p>
                </div>
                <div className="value tooltip" data-tooltip="Building global connections">
                  <h4>Collaboration</h4>
                  <p>Building bridges between artists, media, and audiences worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about__description reveal-on-scroll">
          <p className="highlight-text">
            At its heart, Le Franco.in is more than a festival—it's a movement that shines a spotlight 
            on creativity, nurtures artistic communities, and builds a legacy of cultural celebration 
            that resonates across borders.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;