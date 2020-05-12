import React from 'react';

const Work = ({ work }) => {
  const { image, name, description, technologies } = work;
  return (
    <div className="work">
      <div className="work-title">
        WORK
      </div>
      <img className="gym-app-img" src={image}/>
      <div className="app-description">
        <p style={{fontWeight: 'bold'}}>{name}</p>
        <p>{description}<br/>
        {/* Integrated Google Maps Places API to display each gym location and associated user rating. */}
        Built with: {technologies.join(' | ')}</p>
      </div>
    </div>
  );
};

export default Work;