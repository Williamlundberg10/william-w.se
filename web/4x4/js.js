var OO = "Blue"
var JD = document.getElementById("JD")
var IGame = 0
window.onload = function() {
    JD.className = "MQQ " + OO
    // Initialize game board
    document.addEventListener('keydown', (event) => {
        if (event.key === 'r' || event.key === 'R') {
            location.reload();
        }
    });
}




function addXO(data) {
    const button = document.getElementById("BB" + data);

    for (let index = 0; index < 6; index++) {
        var MS = 6 - index
        var DD = document.getElementById("ButtonX/O-" + MS + data);
        if(DD.textContent == ""){
            
            console.log(MS, OO)
            DD.className = "Button " + OO + " E1" 
            const div = document.createElement('div');
            div.innerHTML = `
                <div class="LL ${OO}"></div>
            `;
            DD.appendChild(div);

            // Check for win after placing piece
            checkGameStatus(MS, data, OO);

            if(OO == "Blue"){
                OO = "Red"
                
            }else{
                OO = "Blue"
                
            }
            JD.className = "MQQ " + OO
            return
        }
    }
    
}

function checkGameStatus(row, col, player) {
    // Check horizontal
    let count = 0;
    for (let c = 1; c <= 7; c++) {
        const cell = document.getElementById(`ButtonX/O-${row}${c}`);
        if (cell.querySelector(`.${player}`)) {
            count++;
            if (count >= 4) {
                pop(`${player} wins!`);
                return;
            }
        } else {
            count = 0;
        }
    }

    // Check vertical
    count = 0;
    for (let r = 1; r <= 6; r++) {
        const cell = document.getElementById(`ButtonX/O-${r}${col}`);
        if (cell.querySelector(`.${player}`)) {
            count++;
            if (count >= 4) {
                pop(`${player} wins!`);
                return;
            }
        } else {
            count = 0;
        }
    }

    // Check diagonal (top-left to bottom-right)
    let startRow = row;
    let startCol = col;
    while (startRow > 1 && startCol > 1) {
        startRow--;
        startCol--;
    }
    count = 0;
    while (startRow <= 6 && startCol <= 7) {
        const cell = document.getElementById(`ButtonX/O-${startRow}${startCol}`);
        if (cell && cell.querySelector(`.${player}`)) {
            count++;
            if (count >= 4) {
                pop(`${player} wins!`);
                return;
            }
        } else {
            count = 0;
        }
        startRow++;
        startCol++;
    }

    // Check diagonal (top-right to bottom-left)
    startRow = row;
    startCol = col;
    while (startRow > 1 && startCol < 7) {
        startRow--;
        startCol++;
    }
    count = 0;
    while (startRow <= 6 && startCol >= 1) {
        const cell = document.getElementById(`ButtonX/O-${startRow}${startCol}`);
        if (cell && cell.querySelector(`.${player}`)) {
            count++;
            if (count >= 4) {
                pop(`${player} wins!`);
                return;
            }
        } else {
            count = 0;
        }
        startRow++;
        startCol--;
    }
}

function pop(M){
    var PP = document.getElementById("popup")
    PP.textContent = M
    PP.className = "popup on"
    setTimeout(() => {
        PP.className = "popup"

        if(IGame == 0){
            setTimeout(() => {
                window.open('index.html', "_self")
            }, 500);
        }

    }, 2500);

}
function mjj(data){
    var HH = document.getElementById("MMAA")
    if(data == 1){
        HH.className = "MQQQ Q1"
    }
    if(data == 2){
        HH.className = "MQQQ Q2"
    }
    if(data == 3){
        HH.className = "MQQQ Q3"
    }
    if(data == 4){
        HH.className = "MQQQ Q4"
    }
    if(data == 5){
        HH.className = "MQQQ Q5"
    }
    if(data == 6){
        HH.className = "MQQQ Q6"
    }
    if(data == 7){
        HH.className = "MQQQ Q7"
    }
    console.log(data)
}