import React from 'react';
import Education from './Education';
import Skills from './Skills';
import Applications from './Applications';
import Experience from './Experience';
import Others from './Others';

const Resume = ({ resume }) => {
  const { education, skills, applications, experience, others } = resume;
  return (
    <div className="resume">
      <div className="resume-title">RESUME</div>
      <div className="resume-details">
        <div className="education-title">
          EDUCATION
          <hr />
        </div>
        <Education education={education} />
        <div className="skills-title">
          TECHNICAL SKILLS
          <hr />
        </div>
        <Skills skills={skills} />
        <div className="applications-title">
          APPLICATIONS
          <hr />
        </div>
        <Applications applications={applications} />
        <div className="experience-title">
          WORK EXPERIENCE
          <hr />
        </div>
        <Experience experience={experience} />
        <div className="others-title">
          LEADERSHIP, SKILLS, ACTIVITIES &amp; INTERESTS
          <hr />
        </div>
        <Others others={others} />
      </div>
      <a href="./RESUME.pdf" download id="download-btn">
        DOWNLOAD
      </a>
    </div>
  );
};

export default Resume;
