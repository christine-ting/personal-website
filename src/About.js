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
            Hello! I'm Eric Weiner a dedicated full-stack software engineer from New Jersey, specializing in bringing life to designs and wire-frames with a strong focus on user experience.
          </p>
          <p>
            My passion lies in crafting accessible and intuitive web interfaces, making technology enjoyable for users of all skill levels.
            I strongly believe in the power of teamwork and diverse perspectives, especially when it comes to perfecting UI/UX. This collaborative spirit helps us uncover and address potential issues, ensuring a seamless experience for the end-user.
          </p>
          <p>
            When I'm not coding, I'm an avid online chess player and an outdoor enthusiast who enjoys snowboarding, hiking, and golf. These hobbies not only offer me a refreshing break but also fuel my creativity and problem-solving skills in the tech world.
          </p>
          <p>
            If you're interested in collaborating or simply want to exchange thoughts on technology, life, or chess strategies, feel free to reach out via email. I'm always open to new ideas and connections in the software engineering community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
