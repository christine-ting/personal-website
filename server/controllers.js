const models = require('../database/models');
const mongoose = require('mongoose');

const controllers = {
  getPortfolio: (req, res) => {
    models.getPortfolio()
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },
  getResume: (req, res) => {
    models.getResume()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
  }
};

module.exports = controllers;