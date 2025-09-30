const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero__content">
        <div className="container">
          <div className="hero__text">
            <h1 className="hero__title text-reveal">
              Celebrating the Art of <span className="highlight">Cinema</span> and <span className="highlight">Media</span>
            </h1>
            <p className="hero__subtitle">
              Le Franco.in is a premier cultural and cinematic platform based in Pondicherry, 
              dedicated to recognizing and promoting creative excellence through prestigious 
              film competitions and media awards.
            </p>
            <div className="hero__buttons">
              <a href="#events" className="btn btn--primary">Explore Events</a>
              <a href="#about" className="btn btn--secondary">Learn More</a>
            </div>
          </div>
          <div className="hero__stats">
            <div className="stat">
              <h3>2025</h3>
              <p>Annual Festival</p>
            </div>
            <div className="stat">
              <h3>Global</h3>
              <p>Recognition</p>
            </div>
            <div className="stat">
              <h3>Pondicherry</h3>
              <p>Based</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hero__background">
        <div className="hero__overlay"></div>
        
        {/* Particle System */}
        <div className="particles">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="particle"></div>
          ))}
        </div>
        
        {/* Film Grain Effect */}
        <div className="film-grain"></div>
        
        {/* Light Beam Effect */}
        <div className="light-beam"></div>
        
        {/* Floating Elements */}
        <div className="floating-element" style={{fontSize: '3rem', top: '15%', left: '8%'}}>🎬</div>
        <div className="floating-element" style={{fontSize: '2.5rem', top: '25%', right: '12%'}}>🏆</div>
        <div className="floating-element" style={{fontSize: '2rem', bottom: '35%', left: '15%'}}>🎭</div>
        <div className="floating-element" style={{fontSize: '2.5rem', top: '45%', right: '8%'}}>📽️</div>
        <div className="floating-element" style={{fontSize: '2rem', bottom: '20%', right: '25%'}}>🌟</div>
        <div className="floating-element" style={{fontSize: '1.8rem', top: '60%', left: '70%'}}>🎪</div>
        
        {/* Enhanced Sparkle Effects */}
        <div className="sparkle" style={{top: '20%', left: '15%', animationDelay: '0s'}}></div>
        <div className="sparkle" style={{top: '40%', right: '20%', animationDelay: '0.5s'}}></div>
        <div className="sparkle" style={{bottom: '30%', left: '25%', animationDelay: '1s'}}></div>
        <div className="sparkle" style={{top: '60%', left: '70%', animationDelay: '1.5s'}}></div>
        <div className="sparkle" style={{bottom: '20%', right: '30%', animationDelay: '2s'}}></div>
        <div className="sparkle" style={{top: '35%', left: '45%', animationDelay: '2.5s'}}></div>
        <div className="sparkle" style={{bottom: '45%', right: '15%', animationDelay: '3s'}}></div>
        <div className="sparkle" style={{top: '75%', left: '30%', animationDelay: '3.5s'}}></div>
      </div>
    </section>
  );
};

export default Hero;