import React, { useState, useEffect } from "react";
import Icons from "./Icons";
import Paint from "./Paint";
import About from "./About";
import Work from "./Work";
import Resume from "./Resume";
import Contact from "./Contact";

const App = () => {
  const [filter, changeFilter] = useState("brightness(100%) grayscale(1)");
  const [color, setColor] = useState(false);
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  });
  const [nameFontSize, setNameFontSize] = useState(80);
  const [roleFontSize, setRoleFontSize] = useState(20);
  const [tabsFontSize, setTabsFontSize] = useState(17);
  const [tabsFlex, setTabsFlex] = useState('row');
  const [aboutFlex, setAboutFlex] = useState('row');
  const [renderIcons, setIconsView] = useState(true);
  const [workSize, setWorkSize] = useState(1300);
  const [workFontSize, setWorkFontSize] = useState(18);
  const [resumeSize, setResumeSize] = useState(1300);
  const [resumeFontSize, setResumeFontSize] = useState(17);


  const checkToResize = () => {
    setNameFontSize(80);
    setRoleFontSize(20);
    setTabsFontSize(17);
    setIconsView(true);
    setTabsFlex('row');
    setAboutFlex('row');
    setWorkSize(1500);
    setResumeSize(1200);
    setResumeFontSize(17);
    setWorkFontSize(18);
    if (window.innerWidth < 1150) {
      setNameFontSize(50);
      setRoleFontSize(20);
      setTabsFlex('column');
    }
    if (window.innerWidth < 1380) {
      setWorkSize(window.innerWidth - 10);
      setResumeSize(window.innerWidth - 30);
    }
    if (window.innerWidth < 1464) {
      setTabsFontSize(13);
      setAboutFlex('column');
    }
    if (window.innerWidth < 800) {
      setNameFontSize(25);
      setRoleFontSize(10);
      setIconsView(false);
      setResumeFontSize(13);
    } 
    if (window.innerWidth < 500) {
      setWorkFontSize(10);
    }
  };

  useEffect(() => {
    checkToResize();
    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      });
      checkToResize();
    };
    window.addEventListener("resize", handleResize);

    return _ => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const clickToChangeFilter = () => {
    setColor(!color);
    if (!color) {
      changeFilter("brightness(100%)");
    } else {
      changeFilter("brightness(100%) grayscale(1)");
    }
  };

  return (
    <div className='main-view'>
      {console.log(window.innerWidth, window.innerHeight)}
      <div className='top-image' style={{ filter }} />
      <div className='title-top'>
        <div id='name' style={{ fontSize: nameFontSize }}>
          CHRISTINE TING
        </div>
        <div id='role' style={{ fontSize: roleFontSize }}>SOFTWARE ENGINEER</div>
      </div>
      <div id='tabs' style={{ fontSize: tabsFontSize, flexDirection: tabsFlex }}>
        <div id='tab'>ABOUT</div>
        <div id='tab'>WORK</div>
        <div id='tab'>RESUME</div>
        <div id='tab'>CONTACT</div>
      </div>
      { renderIcons && <Icons /> }
      <Paint clickToChangeFilter={clickToChangeFilter} color={color} />
      <div className='main-info'>
        <About aboutFlex={aboutFlex}/>
      </div>
      <Work workSize={workSize} workFontSize={workFontSize}/>
      <Resume resumeSize={resumeSize} resumeFontSize={resumeFontSize}/>
      <Contact />
    </div>
  );
};

export default App;
