import { createPendingTask } from "./mainContent"
import { addDeleteButton } from "./mainContent"
import { storeTaskData } from "./storage.js"
import { populateStorage } from "./storage.js"

const addTaskDiv = document.querySelector("#taskDiv")
const addTaskButton = document.querySelector("#addTask")

//botão de add tarefa, da sidebar, que cria um input dinamico
export function createSidebarInput(){ 
    addTaskButton.addEventListener("click", () => {

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
            addTaskFromSidebar(tempButton);
    })
}
//adiciona um evento no botão de addtask  da sidebar pra pegar o valor do input e invocar função de criar tarefa
export function addTaskFromSidebar(tempButton) {

    tempButton.addEventListener("click", () => {
    const input = document.querySelector("#tempInput").value
    createPendingTask(input)
    
     storeTaskData()
    populateStorage()
})
}
createSidebarInput();