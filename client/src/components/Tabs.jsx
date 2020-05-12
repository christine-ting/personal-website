import React from 'react';

const Test = ({ scrollToSection }) => {
  return (
    <div id='tabs'>
      <div name="about" onClick={(e) => scrollToSection(e)}>ABOUT</div>
      <div name="work" onClick={(e) => scrollToSection(e)}>WORK</div>
      <div name="resume" onClick={(e) => scrollToSection(e)}>RESUME</div>
      <div name="contact" onClick={(e) => scrollToSection(e)}>CONTACT</div>
    </div>
  );
};

export default Test;