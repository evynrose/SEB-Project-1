var playerKitten = "K";
var playerPuppy = "P";
var currPlayer = playerKitten;

var gameOver = false;
var board;

var rows = 6;
var columns = 7;
var currColumns = []; //keeps track of which row each column is at.
var bombUsed = false; //whether the bomb has been used or not
// var myBomb = document.getElementById("myBomb");

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
  if (currPlayer === playerKitten) {
    // console.log(myObject[0]);
    tile.classList.add("kitten-piece"); //if current player = kitten, and if kitten.length === 1 then dropBomb && pop.myObjectKitten <-- same for puppy
    currPlayer = playerPuppy;
  } else {
    // console.log(myObject[1]);
    tile.classList.add("puppy-piece");
    currPlayer = playerKitten;
  }

  //   if (currPlayer === playerKitten && myObject[0] === "kitten") {
  //     console.log("bombButton");
  //     console.log(myObject);
  //     myBomb.disabled = true;
  //   }

  r -= 1; //update the row height for that column
  currColumns[c] = r; //update the array
  //   myBombFunc();
  checkWinner();
}
// const myObject = ["kitten", "puppy"];
// function myBombFunc() {
//   console.log("button clicked");

//   if (currPlayer === playerKitten && myObject[0] === "kitten") {
//     myObject.shift();
//     console.log("bombButton");
//     console.log(myObject);
//     // myBomb.disabled = true;
//   }
//   if (currPlayer === playerPuppy && myObject[1] === "puppy") {
//     myObject.pop();
//     console.log("bombButton");
//     console.log(myObject);
//     // myBomb.disabled = true;
//   }
// }
function dropBomb() {
  if (gameOver) {
    return;
  }
}

function dropBomb() {
  //
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
        // Remove the piece
        tileAbove.classList.remove("kitten-piece", "puppy-piece");
        // Reset the corresponding cell in the board array
        board[r + 1][c] = " ";
        // Update current row for the column
        r += 1;
        currColumns[c] = r;
        // Ensure the cell becomes playable again
        let belowTile = document.getElementById(
          r.toString() + "-" + c.toString()
        );
        belowTile.classList.remove("kitten-piece", "puppy-piece");
        return; // Leave the function after removing one piece
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
    winner.innerText = "Kitten Wins!";
  } else {
    winner.innerText = "Puppy Wins!";
  }
  gameOver = true;
}

let button = document.getElementById("resetbutton");
button.addEventListener("click", () => location.reload());

let bombButton = document.getElementById("bombBtn");
bombButton.addEventListener("click", dropBomb);

// myBomb.addEventListener("click", myBombFunc);

const audio = document.getElementById("audio");
const toggleButton = document.getElementById("toggleButton");

toggleButton.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    toggleButton.textContent = "🔇";
  } else {
    audio.pause();
    toggleButton.textContent = "🔈";
  }
});

// playerKitten = { name : “K”, bombdropped: False}

// Nathalie Kirch to Everyone (21 Feb 2024, 6:28 pm)
// At the end of dropbomb function, current player.bomdropped = True
// if currentPlayer.bombdropped === True : return

//create object with playerkitten as 1, playerpuppy as 2
// create the two buttons
