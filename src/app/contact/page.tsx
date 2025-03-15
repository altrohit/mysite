"use client";

export default function Contact() {
  return (
    <div className="contact-container">
      <header className="contact-header">
        <h1>Contact</h1>
        <p>Let&apos;s discuss AI research and collaboration opportunities</p>
      </header>

      <div className="contact-grid">
        <div className="contact-info-card">
          <h2>Get in Touch</h2>
          <p>I&apos;m always interested in discussing research opportunities, collaborations, or questions about AI and machine learning.</p>
          <div className="contact-links">
            <a href="https://www.linkedin.com/in/guptrrohit" target="_blank" rel="noopener noreferrer" className="contact-link">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="contact-info-card">
          <h2>Research Interests</h2>
          <ul className="interest-list">
            <li>Privacy-Preserving AI</li>
            <li>Deep Learning</li>
            <li>Reinforcement Learning</li>
            <li>IoT Optimization</li>
          </ul>
        </div>

        <div className="contact-info-card">
          <h2>Current Location</h2>
          <p>Pune, India</p>
          <p>Open to remote collaboration and research opportunities</p>
        </div>
      </div>
    </div>
  );
}
