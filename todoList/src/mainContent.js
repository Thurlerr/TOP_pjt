import { funcaoDeFora } from "./sidebarEvents"

const mainContent = document.querySelector("#mainContent")
const pendingTask = document.querySelector("#pendingTask")

//a partir do valor da funcaoDeFora, cria uma tarefa no card Pendente, essa função é chamada
//no evento dentro da função addTask do módulo sidebarEvents responsável pelo clique no botão de Adicionar Tarefa
export function createPendingTask(){

    const tempDiv = document.createElement("div")
    tempDiv.classList = "pDivTask"
    
    const tempSpan = document.createElement("span")
    tempSpan.classList = "pTask"
    tempSpan.textContent = funcaoDeFora
    
    
    const doneButton = document.createElement("button")
    doneButton.id = "doneButton"
    
    tempDiv.append(tempSpan,doneButton)
    pendingTask.insertAdjacentElement("beforeend", tempDiv)
    markTaskAsDone()
}

//move tarefa do pendente para concluída, selecionando todos os doneButtons e adicionando eventos a cada um
//utilizando forEach. o forEach itera sobre cada elemento da nodelist capturada pra adicionar um evento onde
//pega o pai do elemento clicado (vai pegar a pTaskDiv, criada dinamicamente por outra função), e em seguida extrai
//o texto dela para gerar a tarefa concluída no cartão. No final, remove essa tarefa da lista de pendente.
function markTaskAsDone(){

    const doneButton = document.querySelectorAll("#doneButton")
    const cTask = document.querySelector("#completedTask")
    
    doneButton.forEach((button) => {
        
        button.addEventListener("click", (event) => {
            const taskDiv = event.target.parentElement; 
            const taskText = taskDiv.querySelector(".pTask").textContent


            const tempDiv = document.createElement("div")
            tempDiv.classList = "dDivTask"
        
        const tempSpan = document.createElement("span")
        tempSpan.classList = "dTask"
        tempSpan.textContent = taskText
        
        cTask.appendChild(tempSpan)

        taskDiv.remove();
    
        })
    })
}
