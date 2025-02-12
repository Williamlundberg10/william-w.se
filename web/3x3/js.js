const winPatterns = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
    [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
    [1, 5, 9], [3, 5, 7]             // diagonals
];

let currentPlayer = 1;

function addXO(data) {
    const button = document.getElementById("ButtonX/O-" + data);
    if (button.textContent) return; // Prevent playing same cell twice
    
    button.textContent = currentPlayer === 1 ? "X" : "O";
    button.disabled = true;
    button.className = "Button " + button.textContent + " E1"
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    checkGameStatus();
}

function checkGameStatus() {
    const buttons = {};
    for (let i = 1; i <= 9; i++) {
        buttons[i] = document.getElementById("ButtonX/O-" + i).textContent;
    }

    // Check for winner
    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (buttons[a] && buttons[a] === buttons[b] && buttons[a] === buttons[c]) {
            Win(buttons[a] === "X" ? 1 : 2);
            return;
        }
    }

    // Check for draw
    const isDraw = Object.values(buttons).every(cell => cell !== "");
    if (isDraw) {
        Win(3);
    }
}

function Win(result) {
    let message;
    switch (result) {
        case 1:
            message = "Player X wins!";
            break;
        case 2:
            message = "Player O wins!";
            break;
        case 3:
            
            message = "It's a draw!";
            break;
    }
    pop(message)
    console.log(message);
    // Disable all buttons after game ends
    for (let i = 1; i <= 9; i++) {
        document.getElementById("ButtonX/O-" + i).disabled = true;
    }
}

function pop(M){
    var PP = document.getElementById("popup")
    PP.textContent = M
    PP.className = "popup on"
    setTimeout(() => {
        PP.className = "popup"

        setTimeout(() => {
            window.open('index.html', "_self")
        }, 500);

    }, 2500);

}
