import React, { useState, useEffect, useRef } from 'react';
import './Projects.css';
import react from './images/react.jpg';
import python from './images/python.jpg';
import nurse from './images/nurse.jpg';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);

  const projects = [
    {
      img: react,
      title: 'Online Complaint Registration Web Application',
      description: 'Developed a platform for citizens to report and track local infrastructure issues. Technologies used: React, Node.js, Express.js, MongoDB, HTML, CSS, JavaScript, Multer',
      link: 'https://github.com/Mithunraj-M/Complaint-Registration-Application.git'
    },
    {
      img: python,
      title: 'Detection of Brain Tumor from MRI Images',
      description: 'Developed a deep learning model using VGG16 to classify MRI images into "Normal" and "Tumor" categories. Technologies used: Python, NumPy, Scikit-learn, OpenCV, TensorFlow, Keras',
      link: 'https://github.com/Mithunraj-M/Brain-Tumor-Detection.git'
    },
    {
      img: python,
      title: 'Food Recommendation System in a Restaurant',
      description: 'Collected raw data and used K-Means clustering to implement personalized food recommendations. Technologies used: Python, Pandas, NumPy, Scikit-learn, Tkinter',
      link: 'https://github.com/Mithunraj-M/Food-Recommendation-System.git'
    },
    {
      img: nurse,
      title: 'Wireless Nurse Calling System-IOT',
      description: 'Developed a system using ESP8266 and Arduino IDE for nurse calling via MQTT protocol. Technologies used: ESP8266, Arduino IDE, MQTT, Node-RED, Simple Push',
      link: 'https://github.com/Mithunraj-M/Wireless-Nurse-Calling-System.git'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        nextSlide();
      }
    }, 3000); // Auto-slide every 3 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="carousel-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <button className="carousel-arrow left-arrow" onClick={prevSlide}>‹</button>
        <div className="carousel">
          <div className="carousel-wrapper" style={{ transform: `translateX(-${currentIndex * 100 / projects.length}%)` }} ref={carouselRef}>
            {projects.map((project, index) => (
              <div className="project-item" key={index}>
                <img src={project.img} alt={project.title} className="project-img" />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-links">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">Click Here</a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="carousel-arrow right-arrow" onClick={nextSlide}>›</button>
      </div>
    </section>
  );
};

export default Projects;
