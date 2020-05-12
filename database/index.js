const mongoose = require('mongoose');
const PortfolioSchema = require('./schema.js').PortfolioSchema;
const ResumeSchema = require('./schema.js').ResumeSchema;
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/Portfolio', {useNewUrlParser: true})
  .then(() => console.log('db connected'));

const Portfolio = mongoose.model('Portfolio', PortfolioSchema);
const Resume = mongoose.model('Resume', ResumeSchema);

module.exports = { Portfolio, Resume };