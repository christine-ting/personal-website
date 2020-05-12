import React, { useState, useEffect, useRef } from "react";
import Icons from "./Icons";
import Paint from "./Paint";
import About from "./About";
import Work from "./Work";
import Resume from "./Resume";
import Contact from "./Contact";
import Tabs from "./Tabs";

const App = () => {
  const [filter, changeFilter] = useState("brightness(100%) grayscale(1)");
  const [color, setColor] = useState(false);
  const [ navBottom, setNavBottom ] = useState(0);

  useEffect(() => {
    const header = document.getElementById("myHeader");
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        setNavBottom('');
      } else {
        header.classList.remove("sticky");
        setNavBottom(0);
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);

  const clickToChangeFilter = () => {
    setColor(!color);
    if (!color) {
      changeFilter("brightness(100%)");
    } else {
      changeFilter("brightness(100%) grayscale(1)");
    }
  };

  const scrollToSection = (e) => {
    const section = e.target.getAttribute('name');
    document.querySelector(`.${section}`).scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className='main-view'>
      <div className='top-image' style={{ filter }} />
      <div className='title-top'>
        <div id='name'>
          CHRISTINE TING
        </div>
        <div id='role'>SOFTWARE ENGINEER</div>
      </div>
      <div className="nav" id="myHeader" style={{ bottom: navBottom }}>
        <Tabs scrollToSection={scrollToSection}/>
      </div>
      <Icons />
      <Paint clickToChangeFilter={clickToChangeFilter} color={color} />
      <div className='main-info'>
        <About />
      </div>
      <Work />
      <Resume />
      <Contact />
    </div>
  );
};

export default App;
