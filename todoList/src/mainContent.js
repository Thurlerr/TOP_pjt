import { storeTaskData } from "./storage.js"
import { populateStorage } from "./storage.js"


export function createPendingTask(spanValue){
    const pendingTask = document.querySelector("#pendingTask")

    const tempDiv = document.createElement("div")
    tempDiv.classList = "pDivTask"
    
    const tempSpan = document.createElement("span")
    tempSpan.classList = "pTask"
    tempSpan.textContent = spanValue
    
    const doneButton = document.createElement("button")
    doneButton.id = "doneButton"
    
    deleteTask(tempDiv)


    tempDiv.append(tempSpan,doneButton)
    pendingTask.insertAdjacentElement("beforeend", tempDiv)
    markTaskAsDone()
}

//move tarefa do pendente para concluída, selecionando todos os doneButtons e adicionando eventos a cada um
//utilizando forEach. o forEach itera sobre cada elemento da nodelist capturada pra adicionar um evento onde
//pega o pai do elemento clicado (vai pegar a pTaskDiv, criada dinamicamente por outra função), e em seguida extrai
//o texto dela para gerar a tarefa concluída no cartão. No final, remove essa tarefa da lista de pendente.
export function markTaskAsDone(){

    const doneButton = document.querySelectorAll("#doneButton")
    const cTask = document.querySelector("#completedTask")
    
    doneButton.forEach((button) => {
        if (button.dataset.listener === "true") return; 

        button.addEventListener("click", (event) => {
        const taskDiv = event.target.parentElement; 
        const taskText = taskDiv.querySelector(".pTask").textContent

        const tempDiv = document.createElement("div")
        tempDiv.classList = "dDivTask"
        
        const tempSpan = document.createElement("span")
        tempSpan.classList = "dTask"
        tempSpan.textContent = taskText
        
        const removeButton = document.createElement("button");
        removeButton.classList = "taskBtn"

        

        tempDiv.append(tempSpan, removeButton)
        cTask.appendChild(tempDiv)
        removeButton.addEventListener("click", () => {
        const tempDiv = removeButton.parentElement
        const tempSpanText = tempDiv.querySelector(".dTask").textContent //////////
        tempDiv.remove()
        createPendingTask(tempDiv) //verificar porque ao inves de deletar, ta faltando pra pendente

        storeTaskData() //está aqui porque toda ação de interação to usuário deve ativar o storage
        populateStorage()
        })
        
        deleteTask(tempDiv)
    
        taskDiv.remove();
        storeTaskData()
        populateStorage()
        })
        button.dataset.listener = "true";
    })
}

export function activateRemoveButtons() {
const removeButtons = document.querySelectorAll(".taskBtn")

    removeButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
        const tempDiv = btn.parentElement
        const tempSpanText = tempDiv.querySelector(".dTask").textContent
        tempDiv.remove()
        createPendingTask(tempSpanText)
        storeTaskData() //está aqui porque toda ação de interação to usuário deve ativar o storage
        populateStorage()
        })
    })
}

//cria botão de remover já funcional
export function deleteTask(div){
    const deleteTaskBtn = document.createElement("button")
    deleteTaskBtn.classList = "deleteBtn"
    deleteTaskBtn.addEventListener("click", () => {
        console.log("deleteTask foi chamada", div)
        div.remove() //posso tentartbm substituir por  deledeleteTaskBtnteTask.parentElement
        
    })

    div.appendChild(deleteTaskBtn)
}