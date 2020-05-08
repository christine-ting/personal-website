import React from 'react';

const Applications = () => (
  <div className="applications">
    <div className="my-app">
      <div className="app-title">
        <div style={{fontWeight: 400}}>
          Personal Trainer Finder
        </div>
        <div>
          React-Native | React Hooks | Node.js | Express | PostgreSQL | Sequelize | GraphQL | Firebase
        </div>
      </div>
      <div className="app-summary">
        Local gym finder mobile application displaying list of personal trainers with customizable profile page and fitness plans.
      </div>
      <div className="app-details">
        <p>
          &#9675;&nbsp;Developed authentication process by utilizing user flow with React Navigation and Firebase.
        </p>
        <p>
          &#9675;&nbsp;Configured Amazon S3 bucket and built S3 API calls to enable profile picture and cover photo upload functionalities.
        </p>
        <p>
          &#9675;&nbsp;Simplified data querying process by reducing the number of endpoints and defining query schema using GraphQL. 
        </p>
      </div>
    </div>
    <div className="my-app">
      <div className="app-title">
        <div style={{fontWeight: 400}}>
          Trafalgar System Design Project
        </div>
        <div>
          React | Node.js | Express | MongoMongoose | PostgreSQL | Sequelize | AWS EC2
        </div>
      </div>
      <div className="app-summary">
        Back End optimization of a reproduced Trafalgar.com web page with stress test conduction and horizontal scaling. 
      </div>
      <div className="app-details">
        <p>
          &#9675;&nbsp;Executed drain event in Node to successfully seed 10 million records to database for stress testing using Artillery.
        </p>
        <p>
          &#9675;&nbsp;Benchmarked PostgreSQL and Mongo systems to achieve minimal query times via indexing.
        </p>
        <p>
          &#9675;&nbsp;Increased throughput from 1.2K to 9K RPS with a latency of 62ms and error rate of 0% by scaling out to three EC2 instances along with caching and load balancing with Nginx.
        </p>
      </div>
    </div>
    <div className="my-app">
      <div className="app-title">
        <div style={{fontWeight: 400}}>
          REI Product Page Recreation
        </div>
        <div>
          React | Node.js | Express | Mongo | Mongoose
        </div>
      </div>
      <div className="app-summary">
        Full simulation of REI (Recreational Equipment, Inc.) product detail page with Service Oriented Architecture (SOA).
      </div>
      <div className="app-details">
        <p>
          &#9675;&nbsp;Maintained control of CSS behavior by utilizing CSS box-sizing property with border-box.
        </p>
        <p>
          &#9675;&nbsp;Implemented aggregate method of mongoose to simplify sorting process and improve code readability.
        </p>
      </div>
    </div>
  </div>
);

export default Applications;