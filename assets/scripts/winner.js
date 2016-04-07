'use strict';

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


module.exports= boardWinner;
