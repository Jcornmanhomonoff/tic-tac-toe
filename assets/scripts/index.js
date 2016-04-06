'use strict';

const winnerFunction = require('./winner.js');
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
    winnerFunction.winnerX();
    turnClick++;
    console.log(turnClick);
  }


});
});
