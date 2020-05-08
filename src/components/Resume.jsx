import React from 'react';
import Education from './Education';
import Skills from './Skills';
import Applications from './Applications';
import Experience from './Experience';
import Others from './Others';

const Resume = () => {
  return (
    <div className="resume">
      <div className="resume-title">
        RESUME
      </div>
      <div className="resume-details">
        <div className="education-title">
          EDUCATION
          <hr/>
        </div>
        <Education />
        <div className="skills-title">
          TECHNICAL SKILLS
          <hr/>
        </div>
        <Skills />
        <div className="applications-title">
          APPLICATIONS
          <hr/>
        </div>
        <Applications />
        <div className="experience-title">
          WORK EXPERIENCE
          <hr/>
        </div>
        <Experience />
        <div className="others-title">
          LEADERSHIP, SKILLS, ACTIVITIES &amp; INTERESTS
          <hr/>
        </div>
        <Others />
      </div>
      <button>Download</button>
    </div>
  );
};

export default Resume;