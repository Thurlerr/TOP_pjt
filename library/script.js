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

function displayBooks (){
    myBooks.forEach((el) => 
        console.log(el.info()))
}

displayBooks()