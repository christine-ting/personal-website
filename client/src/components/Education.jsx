import React from 'react';

const Education = ({ education }) => {
  return (
    <div className="education">
      {education.map((school, index) => {
        const { college, place, degree, time } = school;
        return (
          <div className="college" key={index}>
            <div id="college-title">
              <div>{college}</div>
              <div>{place}</div>
            </div>
            <div id="college-details">
              <div>{degree}</div>
              <div>{time}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Education;
