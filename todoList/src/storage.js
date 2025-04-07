import { markTaskAsDone } from "./mainContent.js"
import { activateRemoveButtons } from "./mainContent.js"
import { addDeleteButton } from "./mainContent.js"
import { editTaskSpan } from "./mainContent.js"


let storagedTasks = {
    pendingTasks: [],
    completedTasks: []
}
export function storeTaskData(){

    storagedTasks = {
        pendingTasks: [],
        completedTasks: []
    }

const pendingTask = document.querySelectorAll(".pDivTask")
const doneTask = document.querySelectorAll(".dTask")

storeTask(pendingTask)
storeTask(doneTask)

}

export function storeTask(nodeList){
    nodeList.forEach((div) =>{
        if (div.classList == "dTask") { 
            storagedTasks.completedTasks.push(div.firstChild.textContent) 
        } else {
            storagedTasks.pendingTasks.push(div.firstChild.textContent) 
        }
    })
}

//efetivamente usando webstorage
export function populateStorage() {
    Object.keys(storagedTasks).forEach(key => {
      let value = storagedTasks[key];
  
      // Se o valor for um objeto ou array, converta para string (JSON)
      if (typeof value === 'object') {
        value = JSON.stringify(value);
      }
  
      // Agora salva a chave/valor no localStorage
      localStorage.setItem(key, value);
    });
  }

export function populateDomFromStorage() {
    const pendingTask = document.querySelector("#pendingTask");
    const completedTask = document.querySelector("#completedTask");

    // Pega os arrays do localStorage
    const pendingArray = JSON.parse(localStorage.getItem("pendingTasks"));
    const completedArray = JSON.parse(localStorage.getItem("completedTasks"));

    // Se tiver tasks pendentes, joga na DOM
    if (pendingArray) {
        pendingArray.forEach(taskText => {
            const tempDiv = document.createElement("div");
            tempDiv.classList = "pDivTask";

            const tempSpan = document.createElement("span");
            tempSpan.classList = "pTask";
            tempSpan.textContent = taskText;

            const doneButton = document.createElement("button");
            doneButton.id = "doneButton";

            tempDiv.append(tempSpan, doneButton);
            pendingTask.appendChild(tempDiv);


            const editableSpan = pendingTask.lastChild.querySelector("span")
            editTaskSpan(editableSpan)
            addDeleteButton(tempDiv)
        });
    }

    // Se tiver tasks concluídas, joga na DOM também
    if (completedArray) {
        completedArray.forEach(taskText => {
            const tempDiv = document.createElement("div");
            tempDiv.classList = "dDivTask";

            const tempSpan = document.createElement("span");
            tempSpan.classList = "dTask";
            tempSpan.textContent = taskText;

            const removeButton = document.createElement("button");
            // removeButton.id = "removeButton";
            removeButton.classList = "taskBtn"

            tempDiv.append(tempSpan, removeButton);
            completedTask.appendChild(tempDiv);

            const editableSpan = completedTask.lastChild.querySelector("span")
            editTaskSpan(editableSpan)
            addDeleteButton(tempDiv)
        });
    }
    markTaskAsDone();
    activateRemoveButtons();
}
    

