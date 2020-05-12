const router = require('express').Router();
const sendEmail = require('./sendEmail');
const controllers = require('./controllers');

router
  .route('/')
  .get(controllers.getPortfolio);

router
  .route('/resume')
  .get(controllers.getResume);

router
  .route('/form')
  .post(sendEmail);

module.exports = router;