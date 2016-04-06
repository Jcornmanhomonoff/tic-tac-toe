'use strict';

let turnClick = 0;
//
let players = ['player-x', 'player-o'];
let player = '';


//counts clicks
$('.available').on('click', function(){
  let currentCell = $(this);
    turnClick++;
    if (turnClick % 2 === 0) {
      player = players[0];
    } else {
      player = players[1];
    }
});

//changes block color on click & alternates player
$('.available').on('click', function(){
  let currentCell = $(this);
  currentCell.removeClass('available');
  currentCell.addClass('player');
  if (player === 'player-x') {
    currentCell.addClass('player-x');
  }else {
    currentCell.addClass('player-o');
    }
  }
);
