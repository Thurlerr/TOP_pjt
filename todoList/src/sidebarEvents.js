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

    //alg : por default, seta a tarefa pra hoje
    //alg : há um botão responsável por abrir um input e especificar data para fazer a tarefa
})
}
createSidebarInput();

//vai receber um input com valores de data e mes da funçao de criar projeto
//git statu
export function createSetDateBtn (divToAppend){

    const scheduleBtn = document.createElement("button")
    scheduleBtn.classList = "scheduleBtn"
    const div = divToAppend //ou tentar algo com document.queryselector, se o seletor não pegar

    
    scheduleBtn.addEventListener("click", () =>{
        
        const dayScheduleLabel = document.createElement("label")
        dayScheduleLabel.htmlFor = "dayScheduleInput"
        dayScheduleLabel.textContent = "Dia:"
        
        const dayScheduleInput  = document.createElement("input")
        dayScheduleInput.id = "dayScheduleInput"
        
        const monthScheduleLabel = document.createElement("label")
        monthScheduleLabel.htmlFor = "monthScheduleLabel"
        monthScheduleLabel.textContent = "Mês:"
        
        const monthScheduleInput  = document.createElement("input")
        monthScheduleInput.id = "monthScheduleInput"
        
        const confirmScheduleBtn = document.createElement("button")
        scheduleBtn.classList = "confirmScheduleBtn"
        
        
        confirmScheduleBtn.addEventListener("click", () =>{
            const dayScheduleInputValue = document.querySelector("dayScheduleInput").value
            const monthScheduleLabelValue = document.querySelector("monthScheduleInput").value
            
            const scheduleDate = new Date (2024,monthScheduleLabelValue,dayScheduleInputValue) 
            if (dayScheduleInputValue.value === "" && monthScheduleLabelValue === ""){
                 scheduleDate = new Date ()
            }
            
            return scheduleDate
        })
        div.append(dayScheduleLabel,dayScheduleInput,monthScheduleLabel,monthScheduleInput,confirmScheduleBtn)
    })
    
    div.appendChild(scheduleBtn)
}