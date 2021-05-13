const board = document.querySelector('board');
const playerOne = "X";
const playerTwo = "O";
let turn = playerOne;


function placePiece(player) {
    player.target.innerHTML = turn;
    if(turn === playerOne) turn = playerTwo;
    else turn = playerOne;
};

board.addEventListener("mousedown", placePiece);
