import { createPendingTask } from "./mainContent"
import { storeTaskData } from "./storage.js"
import { populateStorage } from "./storage.js"

const addTaskDiv = document.querySelector("#taskDiv")
const addTaskButton = document.querySelector("#addTask")

//botão de add tarefa, da sidebar, que cria um input dinamico
export function createAddTaskInput (){
    addTaskButton.addEventListener("click", () => {
    
    const existingDiv = document.querySelector("#tempDiv") //logica pra evitar duplicidade
        if (existingDiv) {
            existingDiv.remove();
        }else{
            const div = document.createElement("div")
            div.id = "tempDiv"
        
            const tempLabel = document.createElement("label")
            tempLabel.htmlFor = "tempInput"
        
            const tempInput = document.createElement("input")
            tempInput.id = "tempInput"
        
            const tempButton = document.createElement("button")
            tempButton.type = "button"
            tempButton.id = "tempButton"
        
            div.append(tempLabel, tempInput, tempButton)
            addTaskDiv.insertAdjacentElement("afterend", div)

            addTask();
        }
    })
}

//adiciona listener nos botões 
export function addTask () {
        
    tempButton.addEventListener("click", () => {
    const input = document.querySelector("#tempInput").value
    createPendingTask(input)
    // storeTaskData()
    // populateStorage()
})
}
createAddTaskInput();
