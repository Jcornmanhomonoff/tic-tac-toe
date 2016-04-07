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

//CHECKS FOR TIE GAME
const tieGame = function(gameBoard){
  let tie = false;
  if (turnClick === 9 && boardWinner === false){
    tie = true;
    console.log('Tie! Start New Game!');
  }
};


//changes block color on click & adds player class (x or o)
//counts clicks & alternates players
$('.available').on('click', function(){
  let currentCell = $(this);
$('.box').on('click', function(){
  if (turnClick % 2 === 0) {
    player = players[0];
  } else {
    player = players[1];
  }
  // let currentCell = $(this);
  if (currentCell.hasClass('available')) {
    currentCell.removeClass('available');
    currentCell.addClass(player);
    if (player === 'player-x') {
      currentCell.addClass('player-x');
    }else {
      currentCell.addClass('player-o');
    }
    // currentCell.text(player);
    $(this).data('gameBoard', player);
    let attribute = $(this).attr('id');
    gameBoard[attribute] = player;
    turnClick++;
    boardWinner(gameBoard);
    tieGame(gameBoard);
    console.log(turnClick);
    console.log(gameBoard);
  }
});
});
});
