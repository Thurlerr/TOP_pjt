import { funcaoDeFora } from "./sidebarEvents"

const mainContent = document.querySelector("#mainContent")
const pendingTask = document.querySelector("#pendingTask")

//posso fazer ela passando como parametro aquela variavel que usa o input, ou, adicionando na marra la no fundo
export function createPendingTask(){

    const tempSpan = document.createElement("span")
    tempSpan.id = "teste"
    tempSpan.textContent = funcaoDeFora

    pendingTask.insertAdjacentElement("beforeend", tempSpan)

}
