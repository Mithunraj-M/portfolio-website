// src/pages/About.js
import React from 'react';
import './About.css'; // Ensure this path is correct
import profile from './images/profile.jpg';
import Timeline from './Timeline'; // Import the Timeline component

const About = () => (
  <section id="about" className="about">
    <div className="about-content">
      <h1>About Me</h1>
      <div className="about-content-wrapper">
        <img src={profile} alt="About Me" />
        <p>
          I am an undergraduate student majoring in Bachelor of Technology in Computer Science Engineering, with a strong passion for machine learning, deep learning, transfer learning, and software development. My academic and project experiences include developing and implementing various machine learning models, working on deep learning projects involving advanced architectures, and applying transfer learning techniques to healthcare-related projects, demonstrating my ability to leverage pre-trained models for specialized tasks. Additionally, I have implemented a web application to track complaints online. I am actively seeking internship opportunities where I can apply my skills and contribute to impactful projects.
        </p>
        
      </div>
      <br></br>
        <br></br>
      <Timeline /> {/* Add the Timeline component here */}
    </div>
  </section>
);

export default About;
