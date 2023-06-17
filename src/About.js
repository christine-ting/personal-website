import React from "react";

const profilePic =
  "https://firebasestorage.googleapis.com/v0/b/personal-website-313d4.appspot.com/o/profile_photo.JPG?alt=media&token=e3d10d1c-4652-403d-abbe-1f4f65d19550";

const About = () => {
  return (
    <div className="about">
      <div className="about-title">ABOUT</div>
      <div className="about-details">
        <img className="profile-pic" src={profilePic} />
        <div className="about-text">
          <p>
            Hello! I'm Christine, an enthusiastic full-stack software engineer
            based in Los Angeles, California.
          </p>
          <p>
            Software design and development have always been my biggest passion,
            because of its ability to transform idea into reality with the
            essence of efficiency! I particularly find it purposeful therefore
            enjoyable when learning and building with different brains as a team
            towards a shared vision.
          </p>
          <p>
            With the belief that only magic can surpass technology, I am eager
            to use my technological skills and creativity to provide
            service/product to fill in the gaps in this society and make this
            world a better place.
          </p>
          <p>
            Feel free to reach out to me on social media or send me an email.
            I'd love to talk about anything from work to life!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
