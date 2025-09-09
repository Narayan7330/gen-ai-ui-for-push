import React from 'react';
import './about.css';

function About() {
  return (
    <section id="about" className="about-section">
      
      <div className="about-container">
        <h2 className="about-title">About Our Project</h2>
        <p className="about-subtitle">
          We've both been there—staring at a deadline, feeling the pressure of school and social life, and wishing we had a space to just talk, without any judgment. That's why we built this.
        </p>
        <div className="about-features-container">
          {/* Feature 1 */}
          <div className="about-feature-card">
            <div className="about-feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2.5c2.5 0 4.5 2 4.5 4.5v0c0 1.5-1 3-2.5 4s-3.5 1-3.5 1h-1c-2.5 0-4.5-2-4.5-4.5v0C2.5 4.5 4.5 2.5 7 2.5Z"/><path d="M14.5 19.5c-2.5 0-4.5-2-4.5-4.5v0c0-1.5 1-3 2.5-4s3.5-1 3.5-1h1c2.5 0 4.5 2 4.5 4.5v0c0 2.5-2 4.5-4.5 4.5Z"/><path d="m12 12-2-2"/><path d="m14 14 2 2"/></svg>
            </div>
            <h3>A New Way to Talk</h3>
            <p>Our AI lets you choose the conversation you need. Whether you prefer to text or talk it out loud, it's ready to listen, anytime.</p>
          </div>

          {/* Feature 2 */}
          <div className="about-feature-card">
            <div className="about-feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>
            <h3>A Zero-Judgment Zone</h3>
            <p>This is a truly private space. Every conversation is completely anonymous and encrypted, so you can share what's on your mind without worry.</p>
          </div>

          {/* Feature 3 */}
          <div className="about-feature-card">
            <div className="about-feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
            </div>
            <h3>Support That Gets You</h3>
            <p>We've designed the AI to be aware of different cultural perspectives, so you can feel truly seen and understood.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;