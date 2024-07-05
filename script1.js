// Game variables
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

// Winning combinations
const winningCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6]             // Diagonals
];

// Function to handle player move
function handleMove(cellIndex) {
  if (gameBoard[cellIndex] === '' && gameActive) {
    gameBoard[cellIndex] = currentPlayer;
    document.getElementsByClassName('cell')[cellIndex].innerText = currentPlayer;
    
    if (checkWin()) {
      displayStatus(`${currentPlayer} wins!`);
      gameActive = false;
    } else if (checkDraw()) {
      displayStatus("It's a draw!");
      gameActive = false;
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      displayStatus(`Player ${currentPlayer}'s turn`);
    }
  }
}

// Function to check for a win
function checkWin() {
  for (let combo of winningCombinations) {
    if (
      gameBoard[combo[0]] !== '' &&
      gameBoard[combo[0]] === gameBoard[combo[1]] &&
      gameBoard[combo[1]] === gameBoard[combo[2]]
    ) {
      return true;
    }
  }
  return false;
}

// Function to check for a draw
function checkDraw() {
  return gameBoard.every(cell => cell !== '');
}

// Function to display game status
function displayStatus(message) {
  document.getElementById('status').innerText = message;
}

// Function to restart the game
function restartGame() {
  currentPlayer = 'X';
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;
  
  const cells = document.getElementsByClassName('cell');
  for (let cell of cells) {
    cell.innerText = '';
  }
  
  displayStatus(`Player ${currentPlayer}'s turn`);
}

// Initial game status display
displayStatus(`Player ${currentPlayer}'s turn`);
