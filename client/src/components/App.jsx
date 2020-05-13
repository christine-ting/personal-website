import React, { useState, useEffect } from "react";
import Icons from "./Icons";
import Paint from "./Paint";
import About from "./About";
import Work from "./Work";
import Resume from "./Resume";
import Contact from "./Contact";
import Tabs from "./Tabs";
import axios from "axios";
import Loader from 'react-loader-spinner'


const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [filter, changeFilter] = useState("brightness(100%) grayscale(1)");
  const [color, setColor] = useState(false);
  const [navBottom, setNavBottom] = useState(0);
  const [portfolio, setPortfolio] = useState([]);
  const [resume, setResume] = useState([]);

  const setStickyHeader = () => {
    const header = document.getElementById("myHeader");
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
    getPortfolio();
  }, []);

  const getPortfolio = () => {
    axios
      .get("/api")
      .then(result => {
        setPortfolio(result.data[0]);
        getResume();
      })
      .catch(err => {
        console.error(err);
      });
  };

  const getResume = () => {
    axios
      .get("/api/resume")
      .then(result => {
        setResume(result.data[0]);
        setTimeout(() => {
          setLoading(false);
          setStickyHeader();
        }, 500);
      })
      .catch(err => {
        console.error(err);
      });
  };

  const clickToChangeFilter = () => {
    setColor(!color);
    if (!color) {
      changeFilter("brightness(100%)");
    } else {
      changeFilter("brightness(100%) grayscale(1)");
    }
  };

  const scrollToSection = e => {
    const section = e.target.getAttribute("name");
    document
      .querySelector(`.${section}`)
      .scrollIntoView({ behavior: "smooth" });
  };

  const { name, role, about, applications, contact } = portfolio;

  return (
    <div>
      {isLoading ? (
        <div className='loading'>
          <div id="loading-text">LOADING...</div>
          <Loader type="Rings" color="whitesmoke" height={200} width={200} />
        </div>
      ) : (
        <div className='main-view'>
          <div className='top-image' style={{ filter }} />
          <div className='title-top'>
            <div id='name'>{name}</div>
            <div id='role'>{role}</div>
          </div>
          <div className='nav' id='myHeader' style={{ bottom: navBottom }}>
            <Tabs scrollToSection={scrollToSection} />
          </div>
          <Icons />
          <Paint clickToChangeFilter={clickToChangeFilter} color={color} />
          <div className='main-info'>
            <About about={about} />
          </div>
          <Work applications={applications} />
          <Resume resume={resume} />
          <Contact contact={contact} />
        </div>
      )}
    </div>
  );
};

export default App;
