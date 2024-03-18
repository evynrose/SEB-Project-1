# Description:
Embark on a delightful journey with Connect 4, where adorable puppies and kittens take center stage! Experience the classic game with a charming twist as you strategically drop your pieces to achieve victory. Unleash the power of the cat bomb to cleverly thwart your opponent's moves. Each element, including the whimsical character designs, has been lovingly hand-drawn to add a touch of fun to your gaming experience.

# Deployment link:
https://evynrose.github.io/SEB-Project-1/

# Getting Started/Code Installation:
To enjoy the game locally, simply follow these steps:
1. Clone the repository.
2. Open the index.html file in your favorite web browser.

# Timeframe & Working Team:
Timeframe: One week, working alone.

# Technologies Used:
- HTML
- CSS
- JavaScript



# Requirements from General Assembly:

* The game should be playable for two players on the same computer, taking turns to make their moves
* The winner should be displayed when the game is over

# Planning:

I pseudo-coded my whole project beforehand and did some sketches on my notebook for what I wanted the design to look like. 

# Build/Code Process:
The development journey of Connect 4: KITTENS VS PUPPIES was a blend of inputting my own creativity as well as using what I learned in class, where each line of code contributed to shaping an engaging gaming experience.

I first started with laying out my HTML to have a basic layout for my board.

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Connect 4: KITTENS VS PUPPIES</title>
  <link rel="stylesheet" href="./styles/main.css" />
  <script defer src="./scripts/app.js"></script>
</head>
<body>
  <h1>🐾 Connect 4: KITTENS VS. PUPPIES 🐾</h1>
 
  <div class="board" id="board"></div>
  <button id="resetbutton">Reset Game</button>
  <button id="bombBtn"></button>
  
</body>
</html>

CSS styling was then applied to enhance the visual appeal of the game. Each element was meticulously designed to create an immersive gaming environment, with custom styles for tiles, buttons, and text.


/* CSS Styles for Game Elements */
.board {
  /* Board styling */
}

.tile {
  /* Tile styling */
}


The heart of the game lies in its JavaScript functionality, where game mechanics and interactivity were brought to life. Functions were implemented to handle dropping pieces, checking for a winner, and activating the cat bomb feature.

// Function to set up the game board
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

// Function to handle dropping pieces
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
    return;
  }

  if (!bombUsed) {
    bombUsed = true; // Mark the bomb as used for this turn
  }

  board[r][c] = currPlayer; //update JS board
  let tile = document.getElementById(r.toString() + "-" + c.toString());
  if (currPlayer === playerKitten) {
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

// Function to activate the cat bomb feature
function dropBomb() {
  if (
    gameOver ||
    (currPlayer === playerPuppy && puppyBombDropped) ||
    (currPlayer === playerKitten && kittenBombDropped)
  ) {
    return;
  }
  if (currPlayer === playerKitten) {
    kittenBombDropped = true;
  }
  if (currPlayer === playerPuppy) {
    puppyBombDropped = true;
  }

  // Iterate through each column to find the last placed piece
  for (let c = 0; c < columns; c++) {
    let r = currColumns[c]; // Get the row of the last placed piece in the column
    if (r < 5) {
      let tileAbove = document.getElementById(
        (r + 1).toString() + "-" + c.toString()
      );
      if (
        tileAbove.classList.contains("kitten-piece") ||
        tileAbove.classList.contains("puppy-piece")
      ) {
        tileAbove.classList.remove("kitten-piece", "puppy-piece");
        board[r + 1][c] = " ";
        r += 1;
        currColumns[c] = r;
        let belowTile = document.getElementById(
          r.toString() + "-" + c.toString()
        );
        belowTile.classList.remove("kitten-piece", "puppy-piece");
        return;
      }
    }
  }
}


Each line of code was carefully crafted and iteratively refined to ensure smooth gameplay and optimal user experience.

The result is a captivating gaming experience that seamlessly blends creativity with tech, offering players an immersive journey into the world of Connect 4 with kittens and puppies.

# Challenges 
One of the primary challenges encountered was the implementation of the cat bomb feature, requiring careful consideration of game logic and user interaction to ensure seamless functionality without affecting the entire board.

# Wins 
A significant triumph was achieved in seamlessly integrating hand-drawn character designs into the game, infusing it with my own personality. Additionally, overcoming the challenge of implementing the cat bomb feature was a massive win as well. 

# Key Learnings/Takeaways

This project served as a valuable learning experience, offering insights into JavaScript development and the intricacies of front-end design. It underscored the importance of precision and problem-solving in crafting engaging user experiences.

# Bugs
Fortunately, no bugs were encountered during the development process.

# Future Improvements

In the future, enhancements such as refining the game's design and adding different levels will further elevate the gaming experience.
