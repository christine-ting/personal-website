const mongoose = require('mongoose');
const Portfolio = require('./').Portfolio;
const Resume = require('./').Resume;
const portfolioData = require('./data').portfolioData;
const resumeData = require('./data').resumeData;

Portfolio.create(portfolioData)
  .then(() => {
    console.log('portfolio database seeded');
  })
  .catch(err => console.error(err));

Resume.create(resumeData)
  .then(() => {
    console.log('resume database seeded');
    mongoose.connection.close();
  })
  .catch(err => console.error(err));
