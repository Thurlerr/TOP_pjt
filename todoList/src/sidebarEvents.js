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


export function createSetDateBtn (divToAppend, callBackVarBridge){
    //callBackVarBridge é a própria função que chama createSetDateBtn, pra ter acesso ao valor da data dps

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
            const dayScheduleInputValue = document.querySelector("#dayScheduleInput").value
            const monthScheduleLabelValue = document.querySelector("#monthScheduleInput").value
            
            let scheduleDate = new Date (2024,monthScheduleLabelValue,dayScheduleInputValue) 
            if (dayScheduleInputValue.value === "" && monthScheduleLabelValue === ""){
                 scheduleDate = new Date ()
            }
            
            callBackVarBridge(scheduleDate) //aqui a função que chamou essa função, recebe cópia do valor da data
        })
        divToAppend.append(dayScheduleLabel,dayScheduleInput,monthScheduleLabel,monthScheduleInput,confirmScheduleBtn)
    })
    
    divToAppend.appendChild(scheduleBtn)
}

let projects = {
	// taskTitle: {  //(retorno de #confirmProjectBtn)
	// 	taskText: "", //(retorno de #addToProjectBtn),
  	// 	taskDate: "" //(retorno de .confirmScheduleBtn)
	// },
}

const newProjectBtn = document.querySelector("#newProjectBtn")
    newProjectBtn.addEventListener("click", () => createProject ())
function createProject (){
    projects = {} //reseta o obj toda vez que a função é chamada

    
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
                div.id = "ProjectDiv" 
                
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
                
                projects[projectName] = {}
                let selectedDate = null

                createSetDateBtn(div, (date) => {
                selectedDate = date
                projects[projectName]["taskDate"] = selectedDate
                console.log("Data atribuída ao projeto:", selectedDate)
                })

                div.append(p, newProjectInput, addToProjectBtn, setProjectBtn)
                ganchoRenomear.appendChild(div)


                    addToProjectBtn.addEventListener("click", () =>{
                        const ProjectTask = document.querySelector("#ProjectInput").value

                        const div1 = document.createElement("div")
                        // div.id = "ProjectDiv"

                        const span = document.createElement("span")
                        span.textContent = ProjectTask
                        if (!projects[projectName]["taskText"]) projects[projectName]["taskText"] =[]
                        
                        projects[projectName]["taskText"].push(ProjectTask)
                        console.log(projects)
                        div1.append(span)
                        div.appendChild(div1)
                    })
            })
}

