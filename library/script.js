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

addBookToLibrary("tesouro", "paulo", 13, "nao lido")
addBookToLibrary("gabo", "fred0", 100, "nao lido")
addBookToLibrary("jog", "urgo", 50, "nao lido")

const container = document.querySelector(".table")

function displayBooksOnDom (){
    myBooks.forEach((arrayElement) => {
        const tableRow = document.createElement("tr") //cria table row para o objeto inteiro
        Object.keys(arrayElement).forEach( (keys) => { //pega cada chave do elemento atual do array e itera
            if (keys === "info") return //se for a funçao, early return
            const rowContent = document.createElement("td") //cria table data
            rowContent.innerText = arrayElement[keys] //coloca na table data o conteudo obj.chave
            tableRow.appendChild(rowContent) //coloca a table data dentro da table row
        })
        container.appendChild(tableRow) //após o loop de percorrer o objeto inteiro, coloca essa tableRow dentro da .table
        })
    //talvez essa linha de código nesse lugar seja util no futuro -> p.classList.add("classeDesejada")
}

displayBooksOnDom()
