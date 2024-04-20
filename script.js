const board = document.getElementById('board');
const cells = board.querySelectorAll('.cell');
let currentPlayer = 'X';
let gameActive = true;
const winningCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6] // Diagonals
];

function handleCellClick(event) {
  const cell = event.target;
  const index = cell.dataset.index;
  if (cell.textContent !== '' || !gameActive) return;

  cell.classList.add(currentPlayer.toLowerCase());
  cell.textContent = currentPlayer;

  if (checkWin()) {
    gameActive = false;
    alert(`Player ${currentPlayer} wins!`);
    return;
  }

  if (checkDraw()) {
    gameActive = false;
    alert("It's a draw!");
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWin() {
  return winningCombinations.some(combination => {
    return combination.every(index => {
      return cells[index].textContent === currentPlayer;
    });
  });
}

function checkDraw() {
  return [...cells].every(cell => cell.textContent !== '');
}

cells.forEach(cell => {
  cell.addEventListener('click', handleCellClick);
});
