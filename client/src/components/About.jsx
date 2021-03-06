import React from 'react';

const profilePic =
  'https://ct-my-website.s3-us-west-1.amazonaws.com/Screen+Shot+2020-04-13+at+2.38.23+PM.png';

const About = ({ about, addImagesCount }) => {
  return (
    <div className="about">
      <div className="about-title">ABOUT</div>
      <div className="about-details">
        <img className="profile-pic" src={profilePic} onLoad={() => addImagesCount()}/>
        <div className="about-text">
          {about.split('|').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
