'use strict';

let topRowWin = [$('#cell1'), $('#cell2'), $('#cell3')];
let centerRowWin = [$('#cell4'), $('#cell5'), $('#cell6')];
let bottomRowWin = [$('#cell7'), $('#cell8'), $('#cell9')];
let leftColWin = [$('#cell1'), $('#cell4'), $('#cell7')];
let centerColWin = [$('#cell2'), $('#cell5'), $('#cell8')];
let rightColWin = [$('#cell3'), $('#cell6'), $('#cell9')];
let leftDiagWin = [$('#cell1'), $('#cell5'), $('#cell9')];
let rightDiagWin = [$('#cell3'), $('#cell5'), $('#cell7')];

let winArray= [
  topRowWin,
  centerRowWin,
  bottomRowWin,
  leftColWin,
  centerColWin,
  rightColWin,
  leftDiagWin,
  rightDiagWin,
];

let turnClick = 0;

$('.available').on("click", function(){
  console.log(turnClick ++);
});
