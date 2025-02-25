//convenção iniciar funções construtoras com PascalCase (e lembra de inicializa-las com new)
function Book (title, author, pages, status) {
        this.title = title
        this.author = author
        this.pages = pages
        this.status = status
        this.info = function (){
            return `${this.title} by ${this.author}, ${this.pages} pages, ${this.status}`
        }
    }

function addBookToLibrary(title, author, pages, status){
    const newBook = new Book(title, author, pages, status)
    myBooks.push(newBook)
}

const myBooks = []

// const tesouro = new Book("tesouro", "drew", 10, "lido")
// console.log(tesouro.info())
addBookToLibrary("tesouro", "paulo", 13, "nao lido")
addBookToLibrary("gabo", "fred0", 100, "nao lido")
addBookToLibrary("jog", "urgo", 50, "nao lido")
// console.log(myBooks[1])

//colocar cada elemento do array em um nó da DOM
const container = document.querySelector(".table-data")

function displayBooksOnDom (){
    myBooks.forEach((el) => {
    const tableRow = document.createElement("tr")
    //criar um loop para cada elemento do objeto pertencer a uma td?
    //dentro do loop, cada td vai conter o valor de uma chave desse objeto armazenado no array
    //preciso saber como fazer a chave mudar a cada iteração do loop
    for (i = 0; i < 4; i++){
        const rowContent = document.createElement("td")
        rowContent.textContent = el.
    }
    //talvez essa linha de código nesse lugar seja util no futuro -> p.classList.add("classeDesejada")
    content.textContent = `${el.info()}`
    container.appendChild(content)
})};

displayBooksOnDom()

//query selector, element creator, append element

