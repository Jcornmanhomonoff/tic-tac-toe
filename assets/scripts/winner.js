'use strict';

let gameBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];

let winner = function(player) {
    if (player === gameBoard[0] && player === gameBoard[1] && player === gameBoard[2] ||
        player === gameBoard[3] && player === gameBoard[4] && player === gameBoard[5] ||
        player === gameBoard[6] && player === gameBoard[7] && player === gameBoard[8] ||
        player === gameBoard[0] && player === gameBoard[3] && player === gameBoard[6] ||
        player === gameBoard[1] && player === gameBoard[4] && player === gameBoard[7] ||
        player === gameBoard[2] && player === gameBoard[5] && player === gameBoard[8] ||
        player === gameBoard[0] && player === gameBoard[4] && player === gameBoard[8] ||
        player === gameBoard[2] && player === gameBoard[4] && player === gameBoard[6]){
      return player;
      }
    return false;
  };
