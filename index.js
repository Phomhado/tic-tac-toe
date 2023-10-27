function Player(name, icon) {
    this.name = name;
    this.icon = icon;
}

// Define Gameboard object
const Gameboard = {
    board: Array(9).fill(' '),

    initializeBoard() {
        this.board = Array(9).fill(' ');
    },

    makeMove(player, index) {
        if (this.board[index] === ' ') {
            this.board[index] = player.icon;
        }
    },

    isEmptyCell(index) {
        return this.board[index] === ' ';
    },

    // Implement methods to check for win and tie conditions
};

// Define Game object
const Game = {
    currentPlayer: null,

    startGame(player1, player2) {
        this.currentPlayer = player1;
        Gameboard.initializeBoard();
        this.updateMessage(`Player ${this.currentPlayer.name}'s turn`);
    },

    makeMove(index) {
        if (Gameboard.isEmptyCell(index)) {
            Gameboard.makeMove(this.currentPlayer, index);
            // Check for win or tie conditions and update the game state
            this.toggleCurrentPlayer();
        }
    },

    toggleCurrentPlayer() {
        this.currentPlayer = this.currentPlayer === playerOne ? playerTwo : playerOne;
        this.updateMessage(`Player ${this.currentPlayer.name}'s turn`);
    },

    updateMessage(message) {
        document.getElementById("message").textContent = message;
    },
};

// Create player instances
const playerOne = new Player("Player 1", "X");
const playerTwo = new Player("Player 2", "O");

// Start the game
Game.startGame(playerOne, playerTwo);

// Add event listeners to the game board cells
const cells = document.querySelectorAll("#game-board > div");
cells.forEach((cell, index) => {
    cell.addEventListener("click", () => {
        Game.makeMove(index);
    });
});
s