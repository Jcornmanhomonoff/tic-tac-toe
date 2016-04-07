'use strict';
//
// const xANDo = require('./index.js');
//

let gameBoard = ['', '', '', '', '', '', '', '', '',];

const boardWinner = function(gameBoard) {
  let win = false;
    if (xANDo.player === gameBoard[0] && xANDo.player === gameBoard[1] && xANDo.player === gameBoard[2] ||
        xANDo.player === gameBoard[3] && xANDo.player === gameBoard[4] && xANDo.player === gameBoard[5] ||
        xANDo.player === gameBoard[6] && xANDo.player === gameBoard[7] && xANDo.player === gameBoard[8] ||
        xANDo.player === gameBoard[0] && xANDo.player === gameBoard[3] && xANDo.player === gameBoard[6] ||
        xANDo.player === gameBoard[1] && xANDo.player === gameBoard[4] && xANDo.player === gameBoard[7] ||
        xANDo.player === gameBoard[2] && xANDo.player === gameBoard[5] && xANDo.player === gameBoard[8] ||
        xANDo.player === gameBoard[0] && xANDo.player === gameBoard[4] && xANDo.player === gameBoard[8] ||
        xANDo.player === gameBoard[2] && xANDo.player === gameBoard[4] && xANDo.player === gameBoard[6]){
          console.log("You win " + xANDo.player);
          win = true;
          $('.box').off('click');
    }
  };


//NEED TO CHANGE WHAT PLAYER EQUAL TO

const winnerX = function() {
  console.log('player-o');
  if ($('#cell1').hasClass('player-o') && $('#cell2').hasClass('player-o') && $('#cell3').hasClass('player-o') ||
      $('#cell4').hasClass('player-o') && $('#cell5').hasClass('player-o') && $('#cell6').hasClass('player-o') ||
      $('#cell7').hasClass('player-o') && $('#cell8').hasClass('player-o') && $('#cell9').hasClass('player-o') ||
      $('#cell1').hasClass('player-o') && $('#cell4').hasClass('player-o') && $('#cell7').hasClass('player-o') ||
      $('#cell2').hasClass('player-o') && $('#cell5').hasClass('player-o') && $('#cell8').hasClass('player-o') ||
      $('#cell3').hasClass('player-o') && $('#cell6').hasClass('player-o') && $('#cell9').hasClass('player-o') ||
      $('#cell1').hasClass('player-o') && $('#cell5').hasClass('player-o') && $('#cell9').hasClass('player-o') ||
      $('#cell3').hasClass('player-o') && $('#cell5').hasClass('player-o') && $('#cell7').hasClass('player-o')) {
    console.log("You win " + ('player'));
  }else {
    console.log("No winner yet");
  }
};

// const winnerO = function(player) {
//   console.log(player);
//   if ($('#cell1').hasClass('player-x') && $('#cell2').hasClass('player-x') && $('#cell3').hasClass('player-x') ||
//       $('#cell4').hasClass('player-x') && $('#cell5').hasClass('player-x') && $('#cell6').hasClass('player-x') ||
//       $('#cell7').hasClass('player-x') && $('#cell8').hasClass('player-x') && $('#cell9').hasClass('player-x') ||
//       $('#cell1').hasClass('player-x') && $('#cell4').hasClass('player-x') && $('#cell7').hasClass('player-x') ||
//       $('#cell2').hasClass('player-x') && $('#cell5').hasClass('player-x') && $('#cell8').hasClass('player-x') ||
//       $('#cell3').hasClass('player-x') && $('#cell6').hasClass('player-x') && $('#cell9').hasClass('player-x') ||
//       $('#cell1').hasClass('player-x') && $('#cell5').hasClass('player-x') && $('#cell9').hasClass('player-x') ||
//       $('#cell3').hasClass('player-x') && $('#cell5').hasClass('player-x') && $('#cell7').hasClass('player-x')) {
//     console.log("You win " + ('player-x'));
//   }else {
//     console.log("No winner yet");
//   }
// };

  //
  // let topRowWin = [$('#cell1'), $('#cell2'), $('#cell3')];
  // let centerRowWin = [$('#cell4'), $('#cell5'), $('#cell6')];
  // let bottomRowWin = [$('#cell7'), $('#cell8'), $('#cell9')];
  // let leftColWin = [$('#cell1'), $('#cell4'), $('#cell7')];
  // let centerColWin = [$('#cell2'), $('#cell5'), $('#cell8')];
  // let rightColWin = [$('#cell3'), $('#cell6'), $('#cell9')];
  // let leftDiagWin = [$('#cell1'), $('#cell5'), $('#cell9')];
  // let rightDiagWin = [$('#cell3'), $('#cell5'), $('#cell7')];
  //
  // let winArray= [
  //   topRowWin,
  //   centerRowWin,
  //   bottomRowWin,
  //   leftColWin,
  //   centerColWin,
  //   rightColWin,
  //   leftDiagWin,
  //   rightDiagWin,
  // ];

module.exports= {
  winnerX
  // winnerO,
};
