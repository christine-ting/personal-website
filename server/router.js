const router = require('express').Router();
const sendMessage = require('./sendMessage');
const controllers = require('./controllers');

router
  .route('/')
  .get(controllers.getPortfolio);

router
  .route('/resume')
  .get(controllers.getResume);

router
  .route('/form')
  .post(sendMessage);

module.exports = router;