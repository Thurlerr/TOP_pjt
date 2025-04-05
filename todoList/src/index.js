import "./styles.css"

import { createAddTaskInput } from "./sidebarEvents.js"
import { addTask } from "./sidebarEvents.js"

import { storeTaskData } from "./storage.js"
import { storeTask } from "./storage.js"
import { populateStorage } from "./storage.js"
import { retrieveStorage } from "./storage.js"
import { populateDomFromStorage } from "./storage.js"

console.log("Webpack configurado com sucesso!")

window.storeTaskData = storeTaskData
populateDomFromStorage()
