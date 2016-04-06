'use strict';

let turnClick = 0;
//
let players = ['player-x', 'player-o'];
let player = '';


//counts clicks & alternates players
$('.available').on('click', function(){
  let currentCell = $(this);
    turnClick++;
    if (turnClick % 2 === 0) {
      player = players[0];
    } else {
      player = players[1];
    }
    // if (currentCell.hasClass('player')) {
    //   return turnClick.size;
    // }
});

//changes block color on click & adds player class (x or o)
$('.box').on('click', function(){
  let currentCell = $(this);
  if (currentCell.hasClass('available')) {
    currentCell.removeClass('available');
    currentCell.addClass('player');
  if (player === 'player-x') {
    currentCell.addClass('player-x');
  }else {
    currentCell.addClass('player-o');
    }
  }
  }
);
