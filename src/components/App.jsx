import React, { useState } from 'react';
import Icons from './Icons';
import Paint from './Paint';
import About from './About';
import Work from './Work';
import Resume from './Resume';

const App = () => {
  const [ filter, changeFilter ] = useState('brightness(100%) grayscale(1)');
  const [ color, setColor ] = useState(false);

  const clickToChangeFilter = () => {
    setColor(!color);
    if (!color) {
      changeFilter('brightness(100%)');
    } else {
      changeFilter('brightness(100%) grayscale(1)');
    }
  };

  return (
    <div className="main-view">
      <div className="top-image" style={{filter}}/>
      <div className="title-top">
        <div id="name">CHRISTINE TING</div>
        <div id="role">SOFTWARE ENGINEER</div>
      </div>
      <div id="tabs">
        <div id="tab">ABOUT</div>
        <div id="tab">WORK</div>
        <div id="tab">RESUME</div>
        <div id="tab">CONTACT</div>
      </div>
      <Icons />
      <Paint clickToChangeFilter={clickToChangeFilter} color={color}/>
      <div className="main-info">
        <About />
      </div>
      <Work />
      <Resume />
    </div>
  );
};

export default App;