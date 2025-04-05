import { markTaskAsDone } from "./mainContent.js"

let storagedTasks = {
    pendingTasks: [],
    completedTasks: []
}

//prepara dados pra ser usado pela storeTask
export function storeTaskData(){

    storagedTasks = {
        pendingTasks: [],
        completedTasks: []
    }

const pendingTask = document.querySelectorAll(".pDivTask")
const doneTask = document.querySelectorAll(".dTask")

storeTask(pendingTask)
storeTask(doneTask)

const data = JSON.stringify(storagedTasks) //esse cara vai vir pro webstorage
window.storagedTasks = storagedTasks
}

export function storeTask(nodeList){
    nodeList.forEach((div) =>{
        console.log(`debug storeTask cod 1 ${div.classList}`)
        if (div.classList == "dTask") { //testar o valor de div.classList
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

export function retrieveStorage(){
    const resetObj = JSON.parse(localStorage.getItem('pendingTasks')); //tem qmuda
    return resetObj
}

export function populateDomFromStorage(){
    let resetObj = retrieveStorage()
    const pendingTask = document.querySelector("#pendingTask")

    resetObj.forEach((inArr) => {

        const tempDiv = document.createElement("div")
            tempDiv.classList = "pDivTask"
            
            const tempSpan = document.createElement("span")
            tempSpan.classList = "pTask"
            tempSpan.textContent = inArr //adaptar
            
            
            const doneButton = document.createElement("button")
            doneButton.id = "doneButton"
            
            tempDiv.append(tempSpan,doneButton)
            pendingTask.insertAdjacentElement("beforeend", tempDiv)
    })
    markTaskAsDone();

}


//popular os arrays com algum metodo que itera sobre essas strings e substitui pelo conteudo de cada span

//pra joga a data de volta pra DOM pra eu visualizar na tela quando o usuario abrir o site, é direto pelo webstorage
//ou eu faço isso com os eventos de manipulação da DOM, usando como parametro a variavel data?