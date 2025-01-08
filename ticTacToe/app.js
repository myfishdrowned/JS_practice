const cells = document.querySelectorAll(".cell");
const message = document.getElementById("message");
const restartButton = document.getElementById("restart");

let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let isGameActive = true;

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

// Handle cell click
cells.forEach((cell, index) => {
    cell.addEventListener("click", () => handleCellClick(cell, index));
});

function handleCellClick(cell, index) {
    if (gameBoard[index] !== "" || !isGameActive) return;

    gameBoard[index] = currentPlayer;
    cell.textContent = currentPlayer;
    cell.classList.add("taken");

    if (checkWin()) {
        message.textContent = `Player ${currentPlayer} Wins!`;
        isGameActive = false;
    } else if (gameBoard.every(cell => cell !== "")) {
        message.textContent = "It's a Draw!";
        isGameActive = false;
    } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        message.textContent = `Player ${currentPlayer}'s Turn`;
    }
}

function checkWin() {
    return winningCombinations.some(combination =>
        combination.every(index => gameBoard[index] === currentPlayer)
    );
}

// Restart the game
restartButton.addEventListener("click", () => {
    gameBoard.fill("");
    cells.forEach(cell => {
        cell.textContent = "";
        cell.classList.remove("taken");
    });
    isGameActive = true;
    currentPlayer = "X";
    message.textContent = "Player X's Turn";
});
