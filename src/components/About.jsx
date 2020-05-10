import React from 'react';

const profilePic = "https://ct-my-website.s3-us-west-1.amazonaws.com/Screen+Shot+2020-04-13+at+2.38.23+PM.png";

const About = ({ aboutFlex }) => {
  return (
    <div className="about">
      <div className="about-title">
        ABOUT
      </div>
      <div className="about-details" style={{flexDirection: aboutFlex}}>
        <img className="profile-pic" src={profilePic}/>
        <div className="about-text">
          <div>
            <p>Hello! I'm Christine, a full-stack software engineer based in Los Angeles, California.<br/>
            I have serious passion for software design and development, and enjoy creating for both web and mobile devices.
            Also, I love working in a team, with all of us building and learning together toward a common vision.</p>
          </div>
          <div>
            <p>Feel free to reach out to me on social media or send me an email. I'd love to talk about anything from work to life.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;