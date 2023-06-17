import React from 'react';

const categories = ['ABOUT', 'WORK', 'CONTACT'];

const Tabs = ({ scrollToSection }) => (
  <div className="tabs">
    {categories.map((category, index) => (
      <div
        name={category.toLowerCase()}
        onClick={e => {
          if (category === 'WORK') {
            window.open('https://atinistudio.com/', '_blank')
          } else {
            scrollToSection(e)
          }
        }}
        key={index}
      >
        {category}
      </div>
    ))}
  </div>
);

export default Tabs;
