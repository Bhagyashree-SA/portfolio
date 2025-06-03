import React from 'react';
import './ContactInfo.css';

const ContactInfo = () => {
  return (
    <section className="contact-info-section" id="contact">
      <h2 className="section-title">
        CONTACT INFO
      </h2>
      <div className="info-cards">
        <div className="info-card">
          <img src="/icons/phone.png" alt="Phone" className="info-icon" />
          <h3>Phone</h3>
          <p>+91 8711008822</p>
        </div>
        <div className="info-card">
          <img src="/icons/email1.png" alt="Email" className="info-icon" />
          <h3>Email</h3>
          <p>abhagyashree37@gmail.com</p>
        </div>
        <div className="info-card">
          <img src="/icons/address.png" alt="Address" className="info-icon" />
          <h3>Address</h3>
          <p>Bhagyashree Shrishail Aladi D/O</p>
          <p>Shrishail Sangappa Aladi,</p>
          <p>Chadachan(p), Shivaji Chowka,</p>
          <p>Indi Thaluk, Vijayapur-586205.</p>
        </div>
        <div className="info-card">
          <img src="/icons/git.png" alt="GitHub" className="info-icon" />
          <h3>GitHub</h3>
          <p>
            <a
              href="http://www.github.com/Bhagyashree-SA"
              target="_blank"
              rel="noopener noreferrer"
              className="info-link"
            >
              github.com/your-github-username
            </a>
          </p>
        </div>
        <div className="info-card">
          <img src="/icons/linkdin.png" alt="LinkedIn" className="info-icon" />
          <h3>LinkedIn</h3>
          <p>
            <a
              href="https://www.linkedin.com/in/bhagyashree-aladi-004996267"
              target="_blank"
              rel="noopener noreferrer"
              className="info-link"
            >
              linkedin.com/in/your-linkedin-username
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
