/////////////////////////////////// T A S K S ////////////////////////////////////////
//board: criar array 3x3 *******ok******
//arrumar um jeito de passar o board criado pela creategameboard para dentro da wincondition (insight na linha de wincondition) *******ok******
//imprimir o quadro no console *******ok******
//criar lógica de win do jogo  *******ok******
//organizar melhor linhas 15 a 22 que guardam informações de jogadores *******ok******
//criar lógica de inserção de valor e impressão no console
//RESOLVER PROBLEMA DE ATUALIZAÇÃO DA BOARD

function winCondition (gameBoard){ //vai rebceer o array, ja em "flat"
    const board = gameBoard
    const winPattern = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], //horizontais
        [0, 3, 6], [1, 4, 7], [2, 5, 8], //verticais
        [0, 4, 8], [2, 4, 6] //diagonais
    ]
    //então, pedir para um if verificar que, se o array retornar true, encerrar o jogo e declarar um vencedor
    if (winPattern.some(pattern => pattern.every(index => board[index] == "X"))){
        playAgain ()
        showWinner("X")
        return "X venceu!"; 
    }//some checa se há algum dos padrões preenchidos, se sim, checa se há apenas X
    if (winPattern.some(pattern => pattern.every(index => board[index] == "O"))){
        playAgain ()
        showWinner("O")
        //função que imprime o vencedor na DOM
        return "O venceu!";
    }
    return "Nenhum vencedor ainda!"
}

//DOM manipulation
const container = document.querySelector(".container-div")
const btn = document.querySelectorAll(".cell")
let lastToken = "X"

function showWinner (winnerParam){
    const winner = document.createElement("div")
    winner.classList.add("winner-div")
    winner.textContent = `o jogador ${winnerParam} venceu!`
    container.appendChild(winner)
}
function playAgain (){
    const againBtn = document.createElement("button")
    againBtn.classList.add("againBtn")
    container.appendChild(againBtn)

    againBtn.addEventListener("click", () => {
        btn.forEach(div => div.innerText = "") //isso funciona assim?
    })
}

//definir jogador X e jogador O
//perguntar quem vai jogar com x e quem vai jogar com o
//a cada clique, alternar entre X e O ***ok*** -- feito com uma variável que muda inline style html usando operador ternário
//ao clique, preencher a coluna ***ok*** -- feito com addeventlistener individualmente em uma nodelist retornada por queryselectorAll
//mudar as cores para X e O ***ok***
//amarrar as cores e o grid aos boards da lógica



//******permite inserção de tokens e checa a cada jogada se há um vencedor
btn.forEach((btn) => {
    btn.addEventListener('click', () => {
    if (btn.textContent === "X" || btn.textContent === "O") return; // Impede reescrever o token
    if (lastToken === "X") btn.style.color = 'red'
    btn.textContent = lastToken === "X" ? "O" : "X" //define textcontent de btn com um desses
    lastToken = btn.textContent
    const currentNodeList = document.querySelectorAll(".cell")
    const tokens = [...currentNodeList].map(el => el.innerText) 
    const resultado = winCondition(tokens);
    console.log(resultado); 
})
})
  
