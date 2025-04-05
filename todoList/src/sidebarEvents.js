import { createPendingTask } from "./mainContent"



import { storeTaskData } from "./storage.js"
import { storeTask } from "./storage.js"
import { populateStorage } from "./storage.js"
import { retrieveStorage } from "./storage.js"
import { populateDomFromStorage } from "./storage.js"

const addTaskDiv = document.querySelector("#taskDiv")
//botões
const addTaskButton = document.querySelector("#addTask")

export function createAddTaskInput (){
    addTaskButton.addEventListener("click", () => {
    const existingDiv = document.querySelector("#tempDiv")

        if (existingDiv) {
            // Se a div já existe, remove
            existingDiv.remove();
            console.log("input removido");
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
            //debug 
            console.log("input criado")
            storeTaskData()
            populateStorage()

        }
})
}
export let funcaoDeFora; //vai segurar o valor do input pra eu usar em outra funçao e criar a task

export function addTask () {
    const tempButton = document.querySelector("#tempButton")
    
    tempButton.addEventListener("click", () => {
    const input = document.querySelector("#tempInput").value
    funcaoDeFora = input;
    createPendingTask()
    console.log(input)
})
}
createAddTaskInput();
