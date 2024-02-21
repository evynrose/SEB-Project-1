// 1) grid with correct numbers
// 2) create cells  (can i click and change the background?)
// 3) can the players take turns?
// 4) how can you tell someone has won the game? - how they've won,

//focus on fundamentals,

// // Function to create the game board
// function createBoard() {
//   var board = document.getElementById("board");
//   for (var i = 0; i < 6; i++) {
//     for (var j = 0; j < 6; j++) {
//       var cell = document.createElement("div");
//       cell.classList.add("cell");
//       cell.addEventListener("click", function () {
//         this.style.backgroundImage = "url('images/kitten.png')"; // Change the background image of cell
//         this.style.backgroundSize = "cover";
//       });
//       board.appendChild(cell);
//     }
//   }
// }

// // Call the createBoard function to generate the game board
// createBoard();

var playerKitten = "K";
var playerPuppy = "P";
var currPlayer = playerKitten;

var gameOver = false;
var board;

var rows = 6;
var columns = 7;
var currColumns = []; //keeps track of which row each column is at.
var bombUsed = false; //whether the bomb has been used or not

window.onload = function () {
  setGame();
};

function setGame() {
  board = [];
  currColumns = [5, 5, 5, 5, 5, 5, 5];
  bombUsed = false; // resets the bomb at the start of the game

  for (let r = 0; r < rows; r++) {
    let row = [];
    for (let c = 0; c < columns; c++) {
      // JS
      row.push(" ");
      // HTML
      let tile = document.createElement("div");
      tile.id = r.toString() + "-" + c.toString();
      tile.classList.add("tile");
      tile.addEventListener("click", setPiece);
      document.getElementById("board").append(tile);
    }
    board.push(row);
  }
}

function setPiece() {
  if (gameOver) {
    return;
  }

  //get coords of that tile clicked
  let coords = this.id.split("-");
  let r = parseInt(coords[0]);
  let c = parseInt(coords[1]);

  // figure out which row the current column should be on
  r = currColumns[c];

  if (r < 0) {
    // board[r][c] != ' '
    return;
  }

  if (!bombUsed) {
    // Check if bomb has been used in this turn
    dropBomb(); // If not, drop the bomb before setting the piece
    bombUsed = true; // Mark the bomb as used for this turn
  }

  board[r][c] = currPlayer; //update JS board
  let tile = document.getElementById(r.toString() + "-" + c.toString());
  if (currPlayer == playerKitten) {
    tile.classList.add("kitten-piece");
    currPlayer = playerPuppy;
  } else {
    tile.classList.add("puppy-piece");
    currPlayer = playerKitten;
  }

  r -= 1; //update the row height for that column
  currColumns[c] = r; //update the array

  checkWinner();
}

function dropBomb() {
  if (gameOver) {
    return;
  }
}

function dropBomb() {
  if (gameOver) {
    return;
  }

  // Iterate through each column to find the last placed piece
  for (let c = 0; c < columns; c++) {
    let r = currColumns[c]; // Get the row of the last placed piece in the column
    if (r < 5) {
      // Ensure there's a piece to remove
      let tileAbove = document.getElementById(
        (r + 1).toString() + "-" + c.toString()
      );
      if (
        tileAbove.classList.contains("kitten-piece") ||
        tileAbove.classList.contains("puppy-piece")
      ) {
        tileAbove.classList.remove("kitten-piece", "puppy-piece"); // Remove the piece from the UI
        board[r + 1][c] = " "; // Reset the corresponding cell in the board array
        return; // Exit the function after removing one piece
      }
    }
  }
}

function checkWinner() {
  // horizontal
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns - 3; c++) {
      if (board[r][c] != " ") {
        if (
          board[r][c] == board[r][c + 1] &&
          board[r][c + 1] == board[r][c + 2] &&
          board[r][c + 2] == board[r][c + 3]
        ) {
          setWinner(r, c);
          return;
        }
      }
    }
  }

  // vertical
  for (let c = 0; c < columns; c++) {
    for (let r = 0; r < rows - 3; r++) {
      if (board[r][c] != " ") {
        if (
          board[r][c] == board[r + 1][c] &&
          board[r + 1][c] == board[r + 2][c] &&
          board[r + 2][c] == board[r + 3][c]
        ) {
          setWinner(r, c);
          return;
        }
      }
    }
  }

  // anti diagonal
  for (let r = 0; r < rows - 3; r++) {
    for (let c = 0; c < columns - 3; c++) {
      if (board[r][c] != " ") {
        if (
          board[r][c] == board[r + 1][c + 1] &&
          board[r + 1][c + 1] == board[r + 2][c + 2] &&
          board[r + 2][c + 2] == board[r + 3][c + 3]
        ) {
          setWinner(r, c);
          return;
        }
      }
    }
  }

  // diagonal
  for (let r = 3; r < rows; r++) {
    for (let c = 0; c < columns - 3; c++) {
      if (board[r][c] != " ") {
        if (
          board[r][c] == board[r - 1][c + 1] &&
          board[r - 1][c + 1] == board[r - 2][c + 2] &&
          board[r - 2][c + 2] == board[r - 3][c + 3]
        ) {
          setWinner(r, c);
          return;
        }
      }
    }
  }
}

function setWinner(r, c) {
  let winner = document.getElementById("winner");
  console.log(winner);
  if (board[r][c] == playerKitten) {
    winner.innerText = "Kitten Wins";
  } else {
    winner.innerText = "Puppy Wins";
  }
  gameOver = true;
}

let button = document.getElementById("resetbutton");
button.addEventListener("click", () => location.reload());

let bombButton = document.getElementById("bombBtn");
bombButton.addEventListener("click", dropBomb);
