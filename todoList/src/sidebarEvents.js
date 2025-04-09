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


export function createSetDateBtn (divToAppend){

    const scheduleBtn = document.createElement("button")
    scheduleBtn.classList = "scheduleBtn"
    //se falhar, tentar verificar o conteudo armazenado em divToAppend pra ver se é um nodeelement
    
    scheduleBtn.addEventListener("click", () =>{
        
        const dayScheduleLabel = document.createElement("label")
        dayScheduleLabel.htmlFor = "dayScheduleInput"
        dayScheduleLabel.textContent = "Dia:"
        
        const dayScheduleInput  = document.createElement("input")
        dayScheduleInput.id = "dayScheduleInput"
        dayScheduleInput.classList = "scheduleInput"
        
        const monthScheduleLabel = document.createElement("label")
        monthScheduleLabel.htmlFor = "monthScheduleLabel"
        monthScheduleLabel.textContent = "Mês:"
        
        const monthScheduleInput  = document.createElement("input")
        monthScheduleInput.id = "monthScheduleInput"
        monthScheduleInput.classList = "scheduleInput"
        
        const confirmScheduleBtn = document.createElement("button")
        confirmScheduleBtn.classList = "confirmScheduleBtn genericConfirmBtn"
        
        
        
        confirmScheduleBtn.addEventListener("click", () =>{
            const dayScheduleInputValue = document.querySelector("dayScheduleInput").value
            const monthScheduleLabelValue = document.querySelector("monthScheduleInput").value
            
            const scheduleDate = new Date (2024,monthScheduleLabelValue,dayScheduleInputValue) 
            if (dayScheduleInputValue.value === "" && monthScheduleLabelValue === ""){
                 scheduleDate = new Date ()
            }
            
            return scheduleDate
        })
        divToAppend.append(dayScheduleLabel,dayScheduleInput,monthScheduleLabel,monthScheduleInput,confirmScheduleBtn)
    })
    
    divToAppend.appendChild(scheduleBtn)
}

function createProject (){

    const ProjectBtn = document.querySelector("#newProjectBtn")

    ProjectBtn.addEventListener("click", () =>{
        
        const newProjectFirstBox = document.createElement("div")
        newProjectFirstBox.classList = "genericDiv"

        const newProjectLabel = document.createElement("label")
        newProjectLabel.htmlFor = "newProjectLabel"
        newProjectLabel.textContent = "Nome do projeto:"
        
        const newProjectInput  = document.createElement("input")
        newProjectInput.id = "newProjectInput"

        const confirmProjectBtn = document.createElement("button")
        confirmProjectBtn.id = "confirmProjectBtn"
        confirmProjectBtn.classList = "genericBtn genericConfirmBtn"


        const ganchoRenomear = document.querySelector("#newProjectDiv")

        newProjectFirstBox.append(newProjectLabel, newProjectInput,confirmProjectBtn)
        ganchoRenomear.appendChild(newProjectFirstBox)

            confirmProjectBtn.addEventListener("click", () =>{
                const projectName = document.querySelector("#newProjectInput").value

                const div = document.createElement("div")
                div.id = "ProjectDiv" //jogar nessa
                
                
                const p = document.createElement("p")
                p.classList = "title"
                p.textContent = projectName
                
                const newProjectInput  = document.createElement("input")
                newProjectInput.id = "ProjectInput"
                
                const addToProjectBtn = document.createElement("button")
                addToProjectBtn.id = "addToProjectBtn"
                
                const setProjectBtn = document.createElement("button")
                setProjectBtn.id = "setProjectBtn"
                setProjectBtn.classList = "genericConfirmBtn"
                
                
                div.append(p, newProjectInput, addToProjectBtn, setProjectBtn)
                createSetDateBtn(div)
                ganchoRenomear.appendChild(div)


                    addToProjectBtn.addEventListener("click", () =>{
                        const ProjectTask = document.querySelector("#ProjectInput").value

                        const div1 = document.createElement("div")
                        // div.id = "ProjectDiv"

                        const span = document.createElement("span")
                        span.textContent = ProjectTask

                        div1.append(span)
                        div.appendChild(div1)
                    })

            })
            
        })



}

createProject ()