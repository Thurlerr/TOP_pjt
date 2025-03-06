
function createGameBoard(){
    const gameBoard = []

    for (let i = 0; i < 3; i++){
        const row = []
        for (let j = 0; j < 3; j++){
            row.push(Cell())//preencher esse cara com cell, porque mais tarde cell recebe um X ou O,
        }
        gameBoard.push(row)
    }

    return gameBoard.map((row) => row.join("   | ")).join("\n-------------\n")
}

function Cell(token){ //refatorar pra ficar menor
    return token
}

console.log(createGameBoard())