import React from 'react';
import './Home.css';

function Home() {
  const downloadResume = () => {
    fetch('http://localhost:5000/download-resume')
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.blob();
      })
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'resume.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
      })
      .catch(err => {
        alert('Download failed: ' + err.message);
      });
  };

  return (
    <div className="home-content">
      <h1>Hi, I’m Bhagyashree S A</h1>
      <p>I am a 6th-semester Computer Science and Engineering student at Malnad College of Engineering.</p>
      <p>I am passionate about learning new technologies and working on projects.</p>

      <button className="resume-button" onClick={downloadResume}>
        Download Resume
      </button>

      <section className="skills-section">
        <h2>My Programming Skills & Projects</h2>
        <ul className="skills-list">
          <li>
            <strong>C Programming:</strong> Basic data structures and algorithms.  
            {/* Add project or code link if available */}
          </li>
          <li>
            <strong>Java:</strong> Object-Oriented Programming.
          </li>
          <li>
            <strong>HTML & CSS:</strong> Building responsive web pages and layouts.
          </li>
          <li>
            <strong>JavaScript:</strong> Adding interactivity and dynamic behavior to web pages.
          </li>
        </ul>
      </section>

      <p>Feel free to check out my <a href="/about">About</a> and <a href="/contact">Contact</a> pages.</p>
    </div>
  );
}

export default Home;
