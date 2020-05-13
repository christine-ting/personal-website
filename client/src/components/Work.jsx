import React from 'react';

const Work = ({ applications }) => {
  return (
    <div className="work">
      <div className="work-title">
        WORK
      </div>
      { applications.map((application, index) => {
        const {name, image, description, technologies, repo, url} = application;
        return (
          <div key={index}>
            <img className="gym-app-img" src={image}/>
            <div className="app-description">
              <p style={{fontWeight: 'bold'}}>{name}</p>
              <p>{description}<br/>
              {/* Integrated Google Maps Places API to display each gym location and associated user rating. */}
              Built with: {technologies.join(' | ')}</p>
            </div>
          </div>
        )
      }) }
    </div>
  );
};

export default Work;