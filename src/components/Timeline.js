import React from 'react';
import './Timeline.css'; // Ensure this path is correct

const Timeline = () => (
  <div className="timeline">
    <div className="timeline-item">
      <div className="timeline-date">2018-2020</div>
      <div className="timeline-content">
        <h3>High School</h3>
        <p className="clg-title">Sudarshan Vidya Mandir</p>
        <p className="clg-title">(Bangalore)</p>
        <p>Completed high school with a distinction of 93%</p>
        <br></br>
        <br></br>
      </div>
    </div>
    <div className="timeline-item">
      <div className="timeline-date">2020-2022</div>
      <div className="timeline-content">
        <h3>Pre-University</h3>
        <p className="clg-title">RV PU College</p>
        <p className="clg-title">(Bangalore)</p>
        <p>Finished pre-university studies with a distinction of 94%</p>
        <br></br>
      </div>
    </div>
    <div className="timeline-item">
      <div className="timeline-date">2022-2026</div>
      <div className="timeline-content">
        <h3>B.Tech in Computer Science and Engineering</h3>
        <p className="clg-title">Vellore Institute of Technology (Chennai)</p>
        <p>3rd year student specializing in artificial intelligence and machine learning</p>
      </div>
    </div>
  </div>
);

export default Timeline;
