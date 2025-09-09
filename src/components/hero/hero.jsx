import React, { useEffect, useState } from 'react';
import './hero.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="hero">
      <div className="hero-container">
        {/* Left Floating SVG */}
        <div className={`hero-svg-left ${isVisible ? 'animate-in' : ''}`}>
          <svg 
            viewBox="0 0 300 400" 
            className="floating-svg"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="leftBrainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00d4aa"/>
                <stop offset="100%" stopColor="#0984e3"/>
              </linearGradient>
            </defs>

            {/* Floating circles */}
            <circle cx="80" cy="60" r="4" fill="#00d4aa" opacity="0.7">
              <animate attributeName="cy" values="60;40;60" dur="3s" repeatCount="indefinite"/>
            </circle>
            <circle cx="220" cy="100" r="3" fill="#0984e3" opacity="0.6">
              <animate attributeName="cy" values="100;80;100" dur="4s" repeatCount="indefinite"/>
            </circle>

            {/* Brain illustration */}
            <g className="brain-container" transform="translate(150,180)">
              <circle r="60" fill="rgba(0,212,170,0.1)" className="brain-bg"/>
              <path 
                d="M-35 -20 C-55 -35, -55 -5, -40 8 C-55 20, -40 35, -20 30 C-15 40, 15 40, 20 30 C40 35, 55 20, 40 8 C55 -5, 55 -35, 35 -20 C25 -35, -25 -35, -35 -20Z" 
                fill="url(#leftBrainGradient)" 
                className="brain-main"
              />
              <g className="neural-network">
                <line x1="-15" y1="-5" x2="15" y2="-5" stroke="#ffffff" strokeWidth="2" opacity="0.8">
                  <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite"/>
                </line>
              </g>
            </g>

            {/* Shield */}
            <g transform="translate(50, 300)">
              <path 
                d="M0,6 L6,0 L12,6 L12,18 C12,24 6,27 6,27 C6,27 0,24 0,18 Z" 
                fill="none" 
                stroke="#00d4aa" 
                strokeWidth="2"
                opacity="0.8"
              />
              <text x="6" y="16" textAnchor="middle" fill="#00d4aa" fontSize="12">🔒</text>
            </g>
          </svg>
        </div>

        {/* Center Content */}
        <div className={`hero-content ${isVisible ? 'animate-in' : ''}`}>
          <div className="hero-badge">
            <span className="badge-icon">🧠</span>
            <span>AI-Powered Mental Wellness</span>
          </div>
          
          <h1 className="hero-title">
            <span>What</span>
            <span> </span>
            <span className="title-highlight">Fear</span> Are You
            <br />Carrying Today ?
          </h1>

          <p className="hero-description">
            Breaking barriers, building bridges. Our AI provides 
            <strong> confidential, empathetic</strong> mental health support 
            for youth facing academic and social pressures.
          </p>
          
          <div className="hero-features">
            <div className="feature-badge confidential">
              <span className="feature-icon">🔒</span>
              <span>100% Confidential</span>
            </div>
            <div className="feature-badge ai-powered">
              <span className="feature-icon">🤖</span>
              <span>AI-Powered Support</span>
            </div>
            <div className="feature-badge culturally-sensitive">
              <span className="feature-icon">❤️</span>
              <span>Culturally Sensitive</span>
            </div>
          </div>
          
          <div className="hero-cta">
            <button className="btn-primary">
              Start Your Wellness Journey
              <span className="btn-arrow">→</span>
            </button>
            <button className="btn-secondary">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Floating SVG */}
        <div className={`hero-svg-right ${isVisible ? 'animate-in' : ''}`}>
          <svg 
            viewBox="0 0 300 400" 
            className="floating-svg"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="rightHeartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fd79a8"/>
                <stop offset="100%" stopColor="#00d4aa"/>
              </linearGradient>
            </defs>

            {/* Floating elements */}
            <circle cx="250" cy="80" r="5" fill="#fd79a8" opacity="0.7">
              <animate attributeName="cy" values="80;60;80" dur="3.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="80" cy="120" r="3" fill="#0984e3" opacity="0.5">
              <animate attributeName="cy" values="120;100;120" dur="4s" repeatCount="indefinite"/>
            </circle>

            {/* Heart animation */}
            <g className="heart-container" transform="translate(150, 200)">
              <path 
                d="M20,12 C20,4 12,0 8,4 C4,0 -4,4 -4,12 C-4,24 8,36 8,36 C8,36 20,24 20,12Z" 
                fill="url(#rightHeartGradient)"
                className="heart-pulse"
              >
                <animateTransform 
                  attributeName="transform" 
                  type="scale" 
                  values="1;1.2;1" 
                  dur="1.5s" 
                  repeatCount="indefinite"
                />
              </path>
            </g>

            {/* Chat bubble */}
            <g transform="translate(150, 300)">
              <ellipse rx="50" ry="20" fill="#ffffff" stroke="#00d4aa" strokeWidth="2" opacity="0.9"/>
              <text y="5" textAnchor="middle" fill="#0984e3" fontSize="11" fontWeight="500">
                "I'm here to help"
              </text>
            </g>

            {/* Another chat bubble */}
            <g transform="translate(200, 340)">
              <ellipse rx="45" ry="18" fill="#ffffff" stroke="#fd79a8" strokeWidth="2" opacity="0.8">
                <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite"/>
              </ellipse>
              <text y="4" textAnchor="middle" fill="#0984e3" fontSize="10" fontWeight="500">
                "You're not alone"
              </text>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
