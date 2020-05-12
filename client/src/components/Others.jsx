import React from 'react';

const Others = ({ others }) => (
  <div className="others">
    { others.map((point, index) => {
      const { category, details } = point;
      return (
        <div key={index}>
          <span style={{fontWeight: 400}}>{category}:&nbsp;</span>{details}
        </div>
      )
    }) }
  </div>
);

export default Others;