const Portfolio = require('./').Portfolio;
const Resume = require('./').Resume;

const models = {
  getPortfolio: () => {
    return Portfolio.find({});
  },
  getResume: () => {
    return Resume.find({});
  }
};

module.exports = models;