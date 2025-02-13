// changing to test github actions

const runGame = async () => {
    gameComplete = false;
    gameData = await fetchGameData();
    resetGameData = structuredClone(gameData);
    createBoard();
    setEventHandlers();
};

const fetchGameData = async () => {
    let fetchResponse = await fetch(activePuzzleURL);
    let fetchedData = await fetchResponse.json();
    return fetchedData;
}

const createBoard = () => {
    let gameTable = document.createElement('table');
    gameBoard.appendChild(gameTable);

    //let boardString = "    <tr>\n"
    gameData.rows.forEach((row, i) => {
        let newRow = document.createElement('tr');
        gameTable.appendChild(newRow);

        row.forEach((cell, j) => {
            let newCell = document.createElement('td')
            newRow.appendChild(newCell);
            newCell.id = `${i},${j}`

            switch(cell.currentState) {
                case 0:newCell
                    newCell.className = 'blank';
                    break;
                case 1:
                    newCell.className = 'blue';
                    break;
                case 2:
                    newCell.className = 'white';
                    break;
            }
        })
    });
    
    let gameStatusText = document.createElement('p');
    gameBoard.appendChild(gameStatusText);
    gameStatusText.id = "statusText";
    gameStatusText.innerText = `${new Date().toDateString()}`

    let buttonDiv = document.createElement('div')
    buttonDiv.id = "buttons";
    gameBoard.appendChild(buttonDiv);

    let checkButton = document.createElement('button')
    checkButton.id = "checkButton";
    checkButton.innerText = "Check";
    buttonDiv.appendChild(checkButton);

    let revealButton = document.createElement('button')
    revealButton.id = "revealButton";
    revealButton.innerText = "Reveal Solution";
    buttonDiv.appendChild(revealButton);

    let resetButton = document.createElement('button')
    resetButton.id = "resetButton";
    resetButton.innerText = "Reset";
    buttonDiv.appendChild(resetButton);

    let randomPuzzle = document.createElement('button')
    randomPuzzle.id = "randomButton";
    randomPuzzle.innerText = "Generate Random Puzzle";
    buttonDiv.appendChild(randomPuzzle);

    let errorCheck = document.createElement("input");
    errorCheck.setAttribute("type", "checkbox");
    errorCheck.id = "errorCheck";
    gameBoard.appendChild(errorCheck);
    
    let errorCheckLabel = document.createElement("label");
    errorCheckLabel.setAttribute("for", "errorCheck");
    errorCheckLabel.innerText = "Display incorrect squares";
    gameBoard.appendChild(errorCheckLabel);
}

const setEventHandlers = () => {
    gameData.rows.forEach((row, i) => {
        row.forEach((cell, j) => {
            if(cell.canToggle){
                let tableCell = document.getElementById(`${i},${j}`);
                tableCell.addEventListener("click", function(){onCellClick(tableCell.id)});
            }
        });
    });

    document.getElementById('checkButton').addEventListener("click", checkBoard)
    document.getElementById('revealButton').addEventListener("click", revealBoard)
    document.getElementById('resetButton').addEventListener("click", resetBoard)
    document.getElementById('randomButton').addEventListener("click", randomBoard)
    document.getElementById('errorCheck').addEventListener("change", showErrors)
}

const onCellClick = (cellId) => {
    if(gameComplete) return;

    let cellLocationArray = cellId.split(",");

    switch(gameData.rows[cellLocationArray[0]][cellLocationArray[1]].currentState) {
        case 0:
            gameData.rows[cellLocationArray[0]][cellLocationArray[1]].currentState = 1;
            break;
        case 1:
            gameData.rows[cellLocationArray[0]][cellLocationArray[1]].currentState = 2;
            break;
        case 2:
            gameData.rows[cellLocationArray[0]][cellLocationArray[1]].currentState = 0;
            break;
    }

    updateBoard();
}

const checkBoard = () => {
    let soFarSoGood = gameData.rows.every((row) => {
        return row.every((cell) => cell.currentState == 0 || cell.currentState == cell.correctState)
    });

    let boardComplete = checkForCompletion();

    if (boardComplete) {
        completeBoard();
        updateStatus("You did it!!", "green")
    } else if(soFarSoGood) {
        updateStatus("So far so good!", "green")
    } else updateStatus("Something is wrong!", "red")
};

const updateStatus = (textInput, color) => {
    let statusText = document.getElementById('statusText');
    statusText.innerText = textInput;
    statusText.style.color = color;
};

const showErrors = () => {
    if (errorsVisible){
        errorsVisible = false;
        updateBoard();

    } else if (!errorsVisible) {
        errorsVisible = true;
        updateBoard();
    }
}

const resetBoard = async () => {
    let confirmReset = confirm("Are you sure you want to reset?");

    if (confirmReset){
        gameData = structuredClone(resetGameData);
        updateBoard();
    }
    if(gameComplete) gameComplete = false;
}

const revealBoard = () => {
    if(gameComplete) return;

    let confirmReveal = confirm("Are you sure you want to reveal the solution?");

    if (confirmReveal) {
        gameData.rows.forEach((row, i) => {
            row.forEach((cell, j) => {
                cell.currentState = cell.correctState;
            });
        });

        updateBoard();
    }
};

const randomBoard = () => {
    let confirmRandom = confirm("Are you sure you want a new random board?");

    if (confirmRandom) {
        while(gameBoard.childElementCount > 0){
            child = gameBoard.firstChild;
            gameBoard.removeChild(child);
        }

        activePuzzleURL = randomPuzzleURL;
        runGame();
    }
}

const checkForCompletion = () => {
    let boardComplete = gameData.rows.every((row) => {
        return row.every((cell) => cell.currentState == cell.correctState)
    });

    return boardComplete;
}

const completeBoard = () => {
    gameData.rows.forEach((row, i) => {
        row.forEach((cell, j) => {
            let tableCell = document.getElementById(`${i},${j}`);
            if(tableCell.className == "white") tableCell.className = "green";
        });
    });

    gameComplete = true;
};

const updateBoard = () => {
    gameData.rows.forEach((row, i) => {
        row.forEach((cell, j) => {
            let tableCell = document.getElementById(`${i},${j}`);

            switch(cell.currentState) {
                case 0:
                    tableCell.className = 'blank';
                    break;
                case 1:
                    tableCell.className = 'blue';
                    break;
                case 2:
                    tableCell.className = 'white';
                    break;
            }
        })

        if(errorsVisible){
            gameData.rows.forEach((row, i) => {
                row.forEach((cell, j) => {
                    let tableCell = document.getElementById(`${i},${j}`);
                    
                    if(cell.currentState != 0 && cell.currentState != cell.correctState){
                        tableCell.className = "red";
                    }
                });
            });
        }
    });

    updateStatus(new Date().toDateString(), "black");
}

let basePuzzleURL = "https://prog2700.onrender.com/threeinarow/sample";
let randomPuzzleURL = "https://prog2700.onrender.com/threeinarow/random";
let activePuzzleURL = basePuzzleURL;

let gameData = {};
let resetGameData = {};

const gameBoard = document.querySelector("#theGame");

let gameComplete;
let errorsVisible = false;

runGame();