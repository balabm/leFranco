const Events = () => {
  const events = [
    {
      title: "Annual Film Awards",
      description: "Honoring the year's most impactful films, directors, and storytellers with prestigious recognition and celebration.",
      features: ["Best Film of the Year", "Director Awards", "Emerging Talent Recognition", "International Categories"],
      icon: "🏆"
    },
    {
      title: "Media Awards Festival",
      description: "Recognizing excellence in journalism, digital media, and entertainment industries with comprehensive award categories.",
      features: ["Journalism Excellence", "Digital Media Innovation", "Entertainment Industry Awards", "Cross-Platform Recognition"],
      icon: "📱"
    },
    {
      title: "International Film Carnivals",
      description: "Special events bringing together global filmmakers, media professionals, and enthusiasts for cultural exchange.",
      features: ["Global Screenings", "Cultural Workshops", "Networking Events", "Industry Collaborations"],
      icon: "🌍"
    }
  ];

  return (
    <section id="events" className="events">
      <div className="container">
        <div className="section-header">
          <h2>Our Events & Awards</h2>
          <p className="section-subtitle">
            Celebrating creative excellence through prestigious competitions and cultural exchanges
          </p>
        </div>

        <div className="events__grid">
          {events.map((event, index) => (
            <div key={index} className="event-card">
              <div className="event-card__icon">
                <span className="icon">{event.icon}</span>
              </div>
              <div className="event-card__content">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <ul className="features-list">
                  {event.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="events__cta">
          <h3>Join Our Next Event</h3>
          <p>Be part of celebrating the finest in cinema and media arts</p>
          <a href="#contact" className="btn btn--primary">Get Involved</a>
        </div>
      </div>
    </section>
  );
};

export default Events;