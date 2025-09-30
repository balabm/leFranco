const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <p className="section-subtitle">
            Connect with us to be part of celebrating creative excellence
          </p>
        </div>

        <div className="contact__content">
          <div className="contact__info">
            <div className="info-card">
              <h3>Headquarters</h3>
              <p>
                <strong>Le Franco.in</strong><br />
                Pondicherry, India<br />
                Premier Cultural & Cinematic Platform
              </p>
            </div>

            <div className="info-card">
              <h3>Connect With Us</h3>
              <div className="contact-links">
                <a href="mailto:info@lefranco.in" className="contact-link">
                  <span className="icon">📧</span>
                  info@lefranco.in
                </a>
                <a href="tel:+91" className="contact-link">
                  <span className="icon">📞</span>
                  Contact Us
                </a>
                <a href="#" className="contact-link">
                  <span className="icon">🌐</span>
                  www.lefranco.in
                </a>
              </div>
            </div>

            <div className="info-card">
              <h3>For Submissions & Partnerships</h3>
              <p>
                Interested in submitting your work or partnering with us? 
                We welcome collaborations from filmmakers, media professionals, 
                and cultural organizations worldwide.
              </p>
              <a href="mailto:submissions@lefranco.in" className="btn btn--secondary">
                Submit Your Work
              </a>
            </div>
          </div>

          <div className="contact__form">
            <form className="contact-form">
              <h3>Send Us a Message</h3>
              
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div className="form-group">
                <label htmlFor="organization">Organization/Film (Optional)</label>
                <input type="text" id="organization" name="organization" />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <select id="subject" name="subject" required>
                  <option value="">Select a subject</option>
                  <option value="submission">Film Submission</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="media">Media Inquiry</option>
                  <option value="general">General Information</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={6} required></textarea>
              </div>

              <button type="submit" className="btn btn--primary btn--full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;