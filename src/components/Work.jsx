import React from 'react';

const Work = ({ workSize, tabsFontSize }) => {
  return (
    <div className="work">
      <div className="work-title">
        WORK
      </div>
      <img className="gym-app-img" src="https://ct-my-website.s3-us-west-1.amazonaws.com/Screen+Shot+2020-05-05+at+5.52.11+PM.png" style={{width: workSize}}/>
      <div className="app-description" style={{width: workSize, fontSize: tabsFontSize}}>
        <p style={{fontWeight: 'bold'}}>Personal Trainer Finder</p>
        <p>Local gym finder mobile application displaying list of personal trainers with customizable profile page and fitness plans. <br/>
        {/* Integrated Google Maps Places API to display each gym location and associated user rating. */}
        Built with: React-Native | React Hooks | Node.js | Express | PostgreSQL/Sequelize | GraphQL | Firebase | Google Places API</p>
      </div>
    </div>
  );
};

export default Work;