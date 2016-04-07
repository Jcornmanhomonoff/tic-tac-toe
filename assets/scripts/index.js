'use strict';

const authEvents = require('./auth/events.js');
$(() => {

authEvents.addHandlers();

//SUB-MENU

// $('.sub-menu').on('click', function(){
//   if ($('.sub-menu').is( ":hidden" )){
//     $('sub-menu').slideDown("slow");
//   }else {
//     $('.sub-menu').hide();
//   }
// });

//TIC-TAC-TOE BOARD FUNCTIONS

let turnClick = 0;
//
let players = ['player-x', 'player-o'];
let player = '';

//counts clicks & alternates players
$('.available').on('click', function(){
  let currentCell = $(this);
    if (turnClick % 2 === 0) {
      player = players[0];
    } else {
      player = players[1];
    }
});

//INPUTS X OR O INTO BLANK ARRAY WHEN CLICKED

let gameBoard = ['', '', '', '', '', '', '', '', '',];

const boardWinner = function(gameBoard) {
  let win = false;
  // console.log(player);
    if (player === gameBoard[0] && player === gameBoard[1] && player === gameBoard[2] ||
        player === gameBoard[3] && player === gameBoard[4] && player === gameBoard[5] ||
        player === gameBoard[6] && player === gameBoard[7] && player === gameBoard[8] ||
        player === gameBoard[0] && player === gameBoard[3] && player === gameBoard[6] ||
        player === gameBoard[1] && player === gameBoard[4] && player === gameBoard[7] ||
        player === gameBoard[2] && player === gameBoard[5] && player === gameBoard[8] ||
        player === gameBoard[0] && player === gameBoard[4] && player === gameBoard[8] ||
        player === gameBoard[2] && player === gameBoard[4] && player === gameBoard[6]){
          console.log("You win " + player);
          win = true;
          $('.box').off('click');
    }
  };

//changes block color on click & adds player class (x or o)
$('.box').on('click', function(){
  let currentCell = $(this);
  if (currentCell.hasClass('available')) {
    currentCell.removeClass('available');
    currentCell.addClass(player);
    if (player === 'player-x') {
      currentCell.addClass('player-x');
    }else {
      currentCell.addClass('player-o');
    }
    boardWinner(gameBoard);
    turnClick++;
    console.log(turnClick);
    console.log(gameBoard);
  }

});
});
