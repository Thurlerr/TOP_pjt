import "./styles.css"

import { createAddTaskInput} from "./sidebarEvents.js" //precisa ficar aqui pra linkar o modulo sidebar no entrypoint
import { storeTaskData } from "./storage.js"
import { populateDomFromStorage } from "./storage.js"

console.log("Webpack configurado com sucesso!")

window.addEventListener("DOMContentLoaded", populateDomFromStorage);

