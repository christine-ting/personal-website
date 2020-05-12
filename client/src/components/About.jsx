import React from 'react';

const profilePic = "https://ct-my-website.s3-us-west-1.amazonaws.com/Screen+Shot+2020-04-13+at+2.38.23+PM.png";

const About = ({ about }) => {
  return (
    <div className="about">
      <div className="about-title">
        ABOUT
      </div>
      <div className="about-details">
        <img className="profile-pic" src={profilePic}/>
        <div className="about-text">
          <div>
            <p>{about}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;