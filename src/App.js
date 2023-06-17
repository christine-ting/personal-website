import React, { useState, useEffect } from "react";
import Icons from "./Icons";
import Paint from "./Paint";
import About from "./About";
import Contact from "./Contact";
import Tabs from "./Tabs";
import axios from "axios";
import $ from "jquery";
import { CircularProgress } from "@mui/material";

const App = () => {
  const [filter, changeFilter] = useState("brightness(100%) grayscale(1)");
  const [color, setColor] = useState(false);
  const [navBottom, setNavBottom] = useState(0);

  const setStickyHeader = () => {
    const header = document.getElementById("my-header");
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        setNavBottom("");
      } else {
        header.classList.remove("sticky");
        setNavBottom(0);
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  };

  useEffect(() => {
    setStickyHeader();
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
    <a href="./RESUME.pdf" download id="download-btn">
      DOWNLOAD
    </a>;
    const section = e.target.getAttribute("name");
    document
      .querySelector(`.${section}`)
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="main-view">
      <div className="top-image" style={{ filter }} />
      <div className="title-top">
        <div id="name">CHRISTINE TING</div>
        <div id="role">Software Engineer & Founder of</div>
        <div
          className="atini-logo"
          onClick={() => window.open("https://atinistudio.com/", "_blank")}
        ></div>
      </div>
      <div className="nav" id="my-header" style={{ bottom: navBottom }}>
        <Tabs scrollToSection={scrollToSection} />
      </div>
      <Icons />
      <Paint clickToChangeFilter={clickToChangeFilter} color={color} />
      <div>
        <About />
        <Contact />
      </div>
    </div>
  );
};

export default App;
