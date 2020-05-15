import React from 'react';

const Applications = ({ applications }) => (
  <div className="applications">
    {applications.map((application, index) => {
      const { name, technologies, description, details } = application;
      return (
        <div className="my-app" key={index}>
          <div className="app-title">
            <div style={{ fontWeight: 400 }}>{name}</div>
            <div>{technologies.join(" | ")}</div>
          </div>
          <div className="app-summary">{description}</div>
          <div className="app-details">
            {details.map((point, index) => (
              <p key={index}>&#9675;&nbsp;{point}</p>
            ))}
          </div>
        </div>
      );
    })}
  </div>
);

export default Applications;
