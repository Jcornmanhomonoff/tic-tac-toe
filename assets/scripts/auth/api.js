'use strict';

//written function to test if all of your code works
// const signUp = (success, failure, data) => {
//   Math.random() > 0.5 ? success('in signUp') : failure(data);
// };

const app = require('../app-data.js');
const ui = require('./ui.js');


const signUp = (success, failure, data) => {
  // debugger;
  $.ajax({
    method:'POST',
    url: app.api  + '/sign-up',
    data,
  })
  .done(success)
  .fail(failure);
};

const signOut = (success, failure) => {
  // debugger;
  $.ajax({
    method:'DELETE',
    url: app.api + '/sign-out/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  })
  .done(success)
  .fail(failure);
};

const signIn = (success, failure, data) => {
  // debugger;
  $.ajax({
    method:'POST',
    url: app.api + '/sign-in',
    data: data,
  })
  .done(success)
  .fail(failure);
};

const changePassword = (success, failure, data) => {
  $.ajax({
    method: 'PATCH',
    url: app.api + '/change-password/' + app.user.id,
    data,
    headers: {
      Authorization: 'Token token='+ app.user.token,
    },
  })
  .done(success)
  .fail(failure);
  };

const createGame = (success, failure, data) => {
  $.ajax({
    method: 'POST',
    url: app.api + '/games',
    data,
    headers: {
      Authorization: 'Token token='+ app.user.token,
    },
  })
  .done(success)
  .fail(failure);
};

const joinGame = (success, failure, data) => {
  // debugger;
  $.ajax({
    method:'PATCH',
    url: app.api  + '/games/',
    data,
  })
  .done(success)
  .fail(failure);
};

const updateGame = (success, failure) => {
  // debugger;
  $.ajax({
    method:'PATCH',
    url: app.api  + '/games/' + ui.app.gameID,
    headers: {
      Authorization: 'Token token='+ app.user.token,
    },
    data: {
      "game": {
        "cell": {
          "index": app.index,
          "value": app.value,
        },
        "over": false
      }
    }
  })
  .done(success)
  .fail(failure);
};

// const getUser = (success, failure, data) => {
//   // debugger;
//   $.ajax({
//     method:'GET',
//     url: app.api  + '/games/'+ app.user.id,
//     data: data,
//     headers: {
//       Authorization: 'Token token='+ app.user.token,
//     },
//   })
//   .done(success)
//   .fail(failure);
// };

// const  = (success, failure, data) => {
//   // debugger;
//   $.ajax({
//     method:'PATCH',
//     url: app.api  + '/games/'+ app.user.id,
//     data,
//   })
//   .done(success)
//   .fail(failure);
// };

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  createGame,
  joinGame,
  updateGame,
};
