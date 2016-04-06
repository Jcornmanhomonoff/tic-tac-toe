'use strict';

const xANDo = require('./index.js');


// let gameBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];

// let winner = function(player) {
//     if (player === gameBoard[0] && player === gameBoard[1] && player === gameBoard[2] ||
//         player === gameBoard[3] && player === gameBoard[4] && player === gameBoard[5] ||
//         player === gameBoard[6] && player === gameBoard[7] && player === gameBoard[8] ||
//         player === gameBoard[0] && player === gameBoard[3] && player === gameBoard[6] ||
//         player === gameBoard[1] && player === gameBoard[4] && player === gameBoard[7] ||
//         player === gameBoard[2] && player === gameBoard[5] && player === gameBoard[8] ||
//         player === gameBoard[0] && player === gameBoard[4] && player === gameBoard[8] ||
//         player === gameBoard[2] && player === gameBoard[4] && player === gameBoard[6]){
//       return player;
//       }
//     return false;
//   };

//NEED TO CHANGE WHAT PLAYER EQUAL TO

const winner = function(player) {
  console.log(player);
  if (player === $('#cell1') && player === $('#cell2') && player === $('#cell3') ||
      player === $('#cell4') && player === $('#cell5') && player === $('#cell6') ||
      player === $('#cell7') && player === $('#cell8') && player === $('#cell9') ||
      player === $('#cell1') && player === $('#cell4') && player === $('#cell7') ||
      player === $('#cell2') && player === $('#cell5') && player === $('#cell8') ||
      player === $('#cell3') && player === $('#cell6') && player === $('#cell9') ||
      player === $('#cell1') && player === $('#cell5') && player === $('#cell9') ||
      player === $('#cell3') && player === $('#cell5') && player === $('#cell7')){
    console.log("You win " + 'player');
  }else {
    console.log("No winner yet");
  }
};

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

module.exports= {
  winner
};
