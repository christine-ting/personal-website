import React from 'react';

const Skills = () => {
  return (
    <div className="skills">
      <div>
        <span style={{fontWeight: 400}}>Front End:&nbsp;</span>JavaScript (ES5 and ES6), HTML5, CSS3, React, React Hooks, React-Native, Redux, jQuery, D3, Axios, Ajax
      </div>
      <div>
        <span style={{fontWeight: 400}}>Back End:&nbsp;</span>Node.js, Express, MongoDB, Mongoose, MySQL, PostgreSQL, Sequelize, RESTful API Development, GraphQL, Firebase
      </div>
      <div>
        <span style={{fontWeight: 400}}>Testing/Deployment:&nbsp;</span>Mocha, Chai, Jest, Artillery, Loader.io, Amazon EC2, Amazon S3
      </div>
      <div>
        <span style={{fontWeight: 400}}>Developer Tools:&nbsp;</span>Git, npm, Webpack, Babel, Agile Methodology, TDD, Nginx
      </div>
      <div>
        <span style={{fontWeight: 400}}>Graphic Design:&nbsp;</span>Adobe Photoshop, Illustrator 
      </div>
    </div>
  );
};

export default Skills;