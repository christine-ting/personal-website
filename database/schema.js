const mongoose = require('mongoose');

const PortfolioSchema = new mongoose.Schema({
  name: String,
  role: String,
  about: String,
  applications: [{
    name: String,
    image: String,
    description: String,
    technologies: [String],
    repo: String,
    url: String
  }],
  contact: String
});

const ResumeSchema = new mongoose.Schema({
  education: [{
    college: String,
    place: String,
    degree: String,
    time: String
  }],
  skills: [{
    category: String,
    technologies: [String]
  }],
  applications: [{
    name: String,
    technologies: [String],
    description: String,
    details: [String]
  }],
  experience: [{
    name: String,
    place: String,
    titles: [{
      title: String,
      time: String
    }],
    time: String,
    details: [String]
  }],
  others: [
    {
      category: String,
      details: String
    }
  ]
});

module.exports = { PortfolioSchema, ResumeSchema };