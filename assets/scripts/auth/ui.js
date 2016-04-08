'use strict';

const app = require('../app-data.js');

const signInSuccess = (data) => {
  app.user = data.user;
  console.log(app);
};

const signOutSuccess = () => {
  app.user = null;
  console.log(app);
};

const createGameSuccess = (data) => {
  app.gameID = data.game.id;
  console.log(data);
  console.log(app);
};

const allGamesSuccess = (data) => {
  $('#history').text(data.games.length);
};

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  createGameSuccess,
  allGamesSuccess,
  app,
};
