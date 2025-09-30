const Future = () => {
  const developments = [
    {
      title: "Film Market & Networking Hub",
      description: "Establishing a comprehensive platform in Pondicherry providing opportunities for film funding, distribution, and co-productions.",
      status: "Planning Phase",
      year: "2025",
      icon: "🎬"
    },
    {
      title: "Training Programs & Masterclasses",
      description: "Launching expert-led educational programs to nurture the next generation of filmmakers and media professionals.",
      status: "Development",
      year: "2025",
      icon: "🎓"
    },
    {
      title: "Digital Platform",
      description: "Creating an innovative online showcase for independent films and providing global exposure to storytellers worldwide.",
      status: "Design Phase",
      year: "2026",
      icon: "💻"
    },
    {
      title: "International Partnerships",
      description: "Collaborating with international festivals and cultural bodies to strengthen cross-border artistic partnerships.",
      status: "Active",
      year: "Ongoing",
      icon: "🤝"
    }
  ];

  return (
    <section id="future" className="future">
      <div className="container">
        <div className="section-header">
          <h2>Future Development & Growth</h2>
          <p className="section-subtitle">
            Expanding our reach and impact through innovative initiatives and strategic partnerships
          </p>
        </div>

        <div className="future__timeline">
          {developments.map((dev, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-item__icon">
                <span className="icon">{dev.icon}</span>
              </div>
              <div className="timeline-item__content">
                <div className="timeline-item__header">
                  <h3>{dev.title}</h3>
                  <div className="timeline-item__meta">
                    <span className="year">{dev.year}</span>
                    <span className={`status status--${dev.status.toLowerCase().replace(' ', '-')}`}>
                      {dev.status}
                    </span>
                  </div>
                </div>
                <p>{dev.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="future__vision">
          <div className="vision-card">
            <h3>Our Vision for the Future</h3>
            <p>
              Le Franco.in is continuously evolving with a vision to position Pondicherry as a global hub 
              for cinema and media arts. Through strategic initiatives and international collaborations, 
              we aim to create an ecosystem where creativity thrives and artistic voices reach their 
              full potential.
            </p>
            <div className="vision-highlights">
              <div className="highlight">
                <h4>Global Reach</h4>
                <p>Expanding our international presence</p>
              </div>
              <div className="highlight">
                <h4>Digital Innovation</h4>
                <p>Leveraging technology for wider impact</p>
              </div>
              <div className="highlight">
                <h4>Cultural Bridge</h4>
                <p>Connecting diverse artistic communities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Future;