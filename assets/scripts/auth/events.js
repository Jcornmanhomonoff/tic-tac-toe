'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const authApi = require('./api');
const authUi = require('./ui');

const addHandlers = () => {
  $('#sign-up').on('submit', function (event) {
    let data = getFormFields(this);
    event.preventDefault();
    authApi.signUp(authUi.success, authUi.failure, data);
  });
  $('#sign-in').on('submit', function (event) {
    let data = getFormFields(this);
    event.preventDefault();
    authApi.signIn(authUi.signInSuccess, authUi.failure, data);
  });
  // $('#sign-in2').on('submit', function (event) {
  //   let data = getFormFields(this);
  //   event.preventDefault();
  //   authApi.signIn(authUi.signInSuccess, authUi.failure, data);
  // });
  $('#all-games').on('click', function (event) {
    event.preventDefault();
    authApi.allGames(authUi.allGamesSuccess, authUi.failure);
  });
  $('#sign-out').on('submit', function (event) {
    event.preventDefault();
    authApi.signOut(authUi.signOutSuccess, authUi.failure);
  });
  $('#change-password').on('submit', function (event){
    let data = getFormFields(this);
    event.preventDefault();
    authApi.changePassword(authUi.success, authUi.failure, data);
  });
  $('#create-game').on('click', function (event){
    event.preventDefault();
    authApi.createGame(authUi.createGameSuccess, authUi.failure);
  $('div').removeClass('player-o').addClass('.available');
  $('div').removeClass('player-x').addClass('.available');
    }
  );
};



module.exports = {
  addHandlers,
};
