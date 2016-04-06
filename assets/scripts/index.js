'use strict';

let turnClick = 0;

$('.available').on('click', function(){
  let currentCell = $(this);
  console.log(turnClick++);
});
