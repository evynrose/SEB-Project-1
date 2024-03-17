# Description:
Embark on a delightful journey with Connect 4, where adorable puppies and kittens take center stage! Experience the classic game with a charming twist as you strategically drop your pieces to achieve victory. Unleash the power of the cat bomb to cleverly thwart your opponent's moves. Each element, including the whimsical character designs, has been lovingly hand-drawn to add a touch of whimsy to your gaming experience.

# Deployment link:
[GitHub Repository](https://github.com/evynrose/SEB-Project-1)

# Getting Started/Code Installation:
To enjoy the game locally, simply follow these steps:
1. Clone the repository from the provided link.
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
  // Game setup logic
}

// Function to handle dropping pieces
function setPiece() {
  // Piece dropping logic
}

// Function to check for a winner
function checkWinner() {
  // Winner checking logic
}

// Function to activate the cat bomb feature
function dropBomb() {
  // Cat bomb logic
}


Each line of code was carefully crafted and iteratively refined to ensure smooth gameplay and optimal user experience. Rigorous testing and debugging were conducted to address any issues and ensure the game's flawless performance.

The result is a captivating gaming experience that seamlessly blends creativity with tech, offering players an immersive journey into the world of Connect 4 with kittens and puppies.

