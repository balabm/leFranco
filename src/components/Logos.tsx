const Logos = () => {
  const partnerLogos = [
    { name: "Film Institute Partner", type: "Partner" },
    { name: "Media Association", type: "Partner" },
    { name: "Cultural Council", type: "Partner" },
    { name: "International Festival", type: "Partner" },
    { name: "Broadcasting Network", type: "Partner" },
    { name: "Cinema Foundation", type: "Partner" }
  ];

  const sponsorLogos = [
    { name: "Premium Sponsor", type: "Sponsor" },
    { name: "Technology Partner", type: "Sponsor" },
    { name: "Media Sponsor", type: "Sponsor" },
    { name: "Hospitality Partner", type: "Sponsor" },
    { name: "Equipment Sponsor", type: "Sponsor" },
    { name: "Travel Partner", type: "Sponsor" }
  ];

  return (
    <>
      {/* Partners Section */}
      <section className="logos">
        <div className="container">
          <div className="logos__content">
            <h3 className="logos__title">Our Esteemed Partners</h3>
            <p className="logos__subtitle">
              Collaborating with leading organizations in film, media, and cultural arts
            </p>
          </div>
          <div className="logos__grid">
            {partnerLogos.map((logo, index) => (
              <div key={index} className="logo-item">
                <div className="logo-placeholder">
                  {logo.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Award Sponsors Section */}
      <section className="logos award-sponsors">
        <div className="container">
          <div className="logos__content">
            <h3 className="logos__title">Award Sponsors & Supporters</h3>
            <p className="logos__subtitle">
              Proudly supported by industry leaders who believe in celebrating excellence
            </p>
          </div>
          <div className="logos__grid">
            {sponsorLogos.map((logo, index) => (
              <div key={index} className="logo-item">
                <div className="logo-placeholder">
                  {logo.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Logos;