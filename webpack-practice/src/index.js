import "./styles.css";
import { greeting } from "./greetings.js";
import { addText, addImg } from "./loadContent.js"; // Corrigido

console.log(greeting);

addText("div", "teste de banner", "banner");
addText("p", "testesss");

addImg(
    "https://img.freepik.com/fotos-gratis/uma-fatia-de-pizza-crocante-com-carne-e-queijo_140725-6974.jpg?t=st=1743618911~exp=1743622511~hmac=576e4d504d2179a866c23820c4a34d3ea31296ed8f301cfddcd19ab5a04c68bb&w=740",
    "pizza sendo fatiada",
    "backgroundPizza"
);
