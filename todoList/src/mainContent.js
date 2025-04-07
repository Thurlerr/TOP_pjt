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


    tempDiv.append(tempSpan,doneButton)
    pendingTask.insertAdjacentElement("beforeend", tempDiv)
    // addDeleteButton(tempDiv)

    const editableSpan = pendingTask.lastChild.querySelector("span")
    editTaskSpan(editableSpan)
    addDeleteButton(tempDiv)

    markTaskAsDone()
    storeTaskData() 
    populateStorage()
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

        const editableSpan = completedTask.lastChild.querySelector("span")
        editTaskSpan(editableSpan)
        addDeleteButton(tempDiv)

            removeButton.addEventListener("click", () => {
            const tempDiv = removeButton.parentElement
            const tempSpanText = tempDiv.querySelector(".dTask").textContent //////////
            tempDiv.remove()
            createPendingTask(tempSpanText) 
            // storeTaskData() //está aqui porque toda ação de interação to usuário deve ativar o storage
            // populateStorage()
            })
        
        
    
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

export function addDeleteButton(div){
    const deleteTaskBtn = document.createElement("button")
    deleteTaskBtn.classList = "deleteBtn"

    deleteTaskBtn.addEventListener("click", () => {
        console.log("deleteTask foi chamada", div)
        div.remove()
    storeTaskData() ////se algo quebrar, tenta colocar essse cara dnovo
    populateStorage() 
    })

    div.appendChild(deleteTaskBtn)
}

export function editTaskSpan(span){
    span.addEventListener("dblclick", () => {
        const tempDiv = span.parentElement
        const tempInput = document.createElement("input")
        tempInput.value = span.textContent

        span.remove()
        tempDiv.insertBefore(tempInput, tempDiv.firstChild)

        tempInput.addEventListener("keydown", (e) => {
            if (e.code === "Enter") {  
                const tempSpanReplace = document.createElement("span")

                if (tempDiv.parentElement.id == "pendingTask"){
                    tempSpanReplace.classList = "pTask"
                }else{
                    tempSpanReplace.classList = "dTask"
                }

                tempSpanReplace.textContent = tempInput.value
                
                tempInput.remove()
                tempDiv.insertBefore(tempSpanReplace, tempDiv.firstChild)
                storeTaskData()
                populateStorage()
                editTaskSpan(tempDiv.querySelector("span"))
            }
        })

    });

}
