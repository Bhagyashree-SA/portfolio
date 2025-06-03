import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <h2 className="section-title">
        ABOUT
      </h2>
      <div className="about-content">
        <div className="about-text">
          <p>
Enthusiastic and dedicated student with a good academic foundation and a keen interest in gaining practical 
experience. Seeking an internship or entry-level position to apply my analytical and problem- solving skills while 
contributing to the growth of an innovative organization.
          </p>
        </div>
      </div>

      {/* Education Section */}
      <section className="education-section">
        <h3 className="education-title">Education</h3>
        <div className="education-list">
          <div className="education-item">
            <h4>Malnad College of Engineering, Hassan-573 202</h4>
            <p>8.39 CGPA (Pursuing, 2026)</p>
          </div>
          <div className="education-item">
            <h4>Sri Sangameshwar PU College, Chadachan-586205</h4>
            <p>95.83% (2022)</p>
          </div>
          <div className="education-item">
            <h4>Sri Sangameshwar Madhyamika Shala, Chadachan-586205</h4>
            <p>91.04% (2020)</p>
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="certification-section">
        <h3 className="certification-title">Certification</h3>
        <div className="certification-list">
          <div className="certification-item">
            <h4>Soft Skill Development</h4>
            <p>NPTEL, 2024</p>
          </div>
          <div className="certification-item">
            <h4>Software Testing</h4>
            <p>NPTEL, 2024</p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
