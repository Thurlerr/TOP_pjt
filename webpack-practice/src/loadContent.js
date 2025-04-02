//módulo pra carregar os arquivos

//anexar elemento na DOM

export function addText (tag, content, id) { //declara funçao com dois parametros
const contentDiv = document.querySelector("#content") //seleciona a div pra ser usada como anexo
const tagToInsert = document.createElement(tag) //declara e cria a tag a receber texto (que o valor veio do parametro) 
tagToInsert.textContent = content //a tag criada vai ter dentro do seu HTML, o conteudo recebido via parametro
tagToInsert.id = id
contentDiv.appendChild(tagToInsert)
}

export function addImg (src, alt, id){
    const contentDiv = document.querySelector("#content")
    //cria container flex pra imagem
    // const imgContainer = document.createElement("div"); // Criar um container flex para a imagem
    // imgContainer.style.display = "flex";
    // imgContainer.style.width = "100%";
    // imgContainer.style.height = "100%";

    //cria a imagem
    const imgElement = document.createElement("img")
    imgElement.src = src; //equivalente ao textcontent
    imgElement.alt = alt;
    imgElement.id = id;

    // imgContainer.appendChild(imgElement); 
    contentDiv.appendChild(imgElement)
}

addText("div", "teste de banner", "banner")
addText("p", "testesss")

addImg("https://img.frepik.com/fotos-gratis/uma-fatia-de-pizza-crocante-com-carne-e-queijo_140725-6974.jpg?t=st=1743618911~exp=1743622511~hmac=576e4d504d2179a866c23820c4a34d3ea31296ed8f301cfddcd19ab5a04c68bb&w=740", "pizza sendo fatiada", "backgroundPizza")