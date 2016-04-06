'use strict';

let turnClick = 0;

//counts clicks
$('.available').on('click', function(){
  let currentCell = $(this);
    return turnClick++;
});

//changes block to red on click
$('.available').on('click', function(){
  let currentCell = $(this);
  currentCell.removeClass('available');
  currentCell.css('background', 'red');
});
