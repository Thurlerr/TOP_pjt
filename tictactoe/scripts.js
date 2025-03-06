let player1 = ""
let player2 = ""

player1 = "paulim"
const players = {
    nomeP1: player1,
    nomeP2: player2
}
function createGameBoard(){
    const gameBoard = []

    for (let i = 0; i < 3; i++){
        const row = []
        for (let j = 0; j < 3; j++){
            row.push(null)//preencher esse cara com cell, porque mais tarde cell recebe um X ou O,
        }
        gameBoard.push(row)
    }

    return gameBoard
}

function Cell(token){ //refatorar pra ficar menor
    return token
}

let mainGameBoard = createGameBoard()
console.log(mainGameBoard)
function updateGameBoard (row, col, token) {
    return mainGameBoard[row][col] = token
}

updateGameBoard(0, 1, 'X')
updateGameBoard(1, 1, 'O')
console.log(displayBoard(mainGameBoard))

function displayBoard (board){
   return board.map((row) => row.join("   | ")).join("\n-------------\n")
}


/////////////////////////////////// T A S K S ////////////////////////////////////////
//board: criar array 3x3 *******ok******
//arrumar um jeito de passar o board criado pela creategameboard para dentro da wincondition (insight na linha de wincondition) *******ok******
//imprimir o quadro no console *******ok******
//criar lógica de win do jogo  *******ok******
//organizar melhor linhas 15 a 22 que guardam informações de jogadores *******ok******
//criar lógica de inserção de valor e impressão no console

// 0 1 2
// 3 4 5
// 6 7 8

//winCondition precisa ser disparada para cada inserção de valor, para verificar se uma vitória foi atingida
//winCondition precisa verificar se as posições tem o mesmo valor:

function winCondition (){ //precisa receber o board já populado
    const board = ['X', 'O', 'O', 'X', 'O', 'O', 'X']
    const winPattern = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], //horizontais
    [0, 3, 6], [1, 4, 7], [2, 5, 8], //verticais
    [0, 4, 8], [2, 4, 6] //diagonais
    ]
    //então, pedir para um if verificar que, se o array retornar true, encerrar o jogo e declarar um vencedor

    if (winPattern.some(pattern => pattern.every(index => board[index] === "X"))) return "X venceu!"; //some checa se há algum dos padrões preenchidos, se sim, checa se há apenas X
    if (winPattern.some(pattern => pattern.every(index => board[index] === "O"))) return "O venceu!"; 

    return "Nenhum vencedor ainda!"
        
}


