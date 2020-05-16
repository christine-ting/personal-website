import React, { useState, useEffect } from 'react';
import Icons from './Icons';
import Paint from './Paint';
import About from './About';
import Work from './Work';
import Resume from './Resume';
import Contact from './Contact';
import Tabs from './Tabs';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import $ from 'jquery';

let backgroundImgLoaded = false;

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [filter, changeFilter] = useState('brightness(100%) grayscale(1)');
  const [color, setColor] = useState(false);
  const [navBottom, setNavBottom] = useState(0);
  const [portfolio, setPortfolio] = useState([]);
  const [resume, setResume] = useState([]);
  const [imagesCount, setImagesCount] = useState(0);
  const [loadedFromDb, setLoadedFromDb] = useState(false);

  const setStickyHeader = () => {
    const header = document.getElementById('my-header');
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener('scroll', () => {
      if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
        setNavBottom('');
      } else {
        header.classList.remove('sticky');
        setNavBottom(0);
      }
    });
    return () => {
      window.removeEventListener('scroll', scrollCallBack);
    };
  };

  const loadBackgroundImg = () => {
    var src = $('.top-image').css('background-image');
    var url = src.match(/\((.*?)\)/)[1].replace(/('|")/g, '');
    var img = new Image();
    img.onload = function() {
      setLoading(false);
    };
    img.src = url;
    if (img.complete) img.onload();
  }

  useEffect(() => {
    if (imagesCount === 4) {
      loadBackgroundImg();
    }
    getPortfolio();
  }, [imagesCount]);

  const getPortfolio = () => {
    axios
      .get('/api')
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
      .get('/api/resume')
      .then(result => {
        setResume(result.data[0]);
        setLoadedFromDb(true);
        setStickyHeader();
      })
      .catch(err => {
        console.error(err);
      });
  };

  const clickToChangeFilter = () => {
    setColor(!color);
    if (!color) {
      changeFilter('brightness(100%)');
    } else {
      changeFilter('brightness(100%) grayscale(1)');
    }
  };

  const scrollToSection = e => {
    const section = e.target.getAttribute('name');
    document
      .querySelector(`.${section}`)
      .scrollIntoView({ behavior: 'smooth' });
  };

  const displayLoadingPage = () => {
    if (isLoading) {
      return (
        <div className="loading">
          <div id="loading-text">LOADING...</div>
          <div id="loader">
            <Loader
              type="Rings"
              color="whitesmoke"
              height={'100%'}
              width={'100%'}
            />
          </div>
        </div>
      );
    }
  };

  const addImagesCount = () => {
    setImagesCount(imagesCount + 1);
  };

  const { name, role, about, applications, contact } = portfolio;

  return (
    <div>
      {displayLoadingPage()}
      <div className="main-view">
        <div className="top-image" style={{ filter }} />
        <div className="title-top">
          <div id="name">{name}</div>
          <div id="role">{role}</div>
        </div>
        <div className="nav" id="my-header" style={{ bottom: navBottom }}>
          <Tabs scrollToSection={scrollToSection} />
        </div>
        <Icons />
        <Paint clickToChangeFilter={clickToChangeFilter} color={color} />
        {loadedFromDb && (
          <div>
            <About about={about} addImagesCount={addImagesCount} />
            <Work applications={applications} addImagesCount={addImagesCount} />
            <Resume resume={resume} />
            <Contact contact={contact} />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
