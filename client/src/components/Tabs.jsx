import React from 'react';

const categories = [ 'ABOUT', 'WORK', 'RESUME', 'CONTACT' ];

const Tabs = ({ scrollToSection }) => {
  return (
    <div id='tabs'>
      { categories.map((category, index) => (
        <div name={category.toLowerCase()} onClick={(e) => scrollToSection(e)} key={index}>{category}</div>
      )) }
    </div>
  );
};

export default Tabs;