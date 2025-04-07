import "./styles.css"

import { createSidebarInput} from "./sidebarEvents.js" //precisa ficar aqui pra linkar o modulo sidebar no entrypoint
import { storeTaskData } from "./storage.js"
import { populateDomFromStorage } from "./storage.js"

console.log("Webpack configurado com sucesso!")

window.addEventListener("DOMContentLoaded", populateDomFromStorage);


// import { toggleEditMode } from "./mainContent.js";

// let isEditing = false;

// document.addEventListener("DOMContentLoaded", () => {
//     const editBtn = document.getElementById("editBtn");

//     editBtn.addEventListener("click", () => {
//         isEditing = !isEditing;
//         toggleEditMode(isEditing);
//     });
// });