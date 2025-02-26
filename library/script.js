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
//inserção manual de livros para testar o array e algumas funções
addBookToLibrary("tesouro", "paulo", 13, "nao lido")
addBookToLibrary("gabo", "fred0", 100, "nao lido")
addBookToLibrary("jog", "urgo", 50, "nao lido")

const container = document.querySelector(".table")
//função que cria a tabela e insere dados do array myBooks na DOM e as exibe
function displayBooksOnDom (){
    container.innerHTML = ""; //limpa a tela
    myBooks.forEach((arrayElement, index) => {
        const tableRow = document.createElement("tr") //cria table row para o objeto inteiro
        tableRow.classList.add("table-row")

        Object.keys(arrayElement).forEach( (keys) => { //pega cada chave do elemento atual do array e itera
            if (keys === "info") return //se for a funçao, early return
            const rowContent = document.createElement("td") //cria table data
            rowContent.classList.add("table-data")
            rowContent.innerText = arrayElement[keys] //coloca na table data o conteudo obj.chave
            tableRow.appendChild(rowContent) //coloca a table data dentro da table row
        })
        //botão de remoção
        const rowRmvBtn = document.createElement("button")
        rowRmvBtn.innerText = "Remover Livro"
        rowRmvBtn.classList.add("row-remove-btn")
        //botão de mudar status
        const rowStatusBtn = document.createElement("button") 
        rowStatusBtn.innerText = "Mudar Status"
        rowStatusBtn.classList.add("row-status-btn")
        //inserções na DOM
        container.appendChild(tableRow)
        tableRow.append(rowRmvBtn,rowStatusBtn)
        //evento que remove o livro (objeto do myBooks) de acordo com o indice
        rowRmvBtn.addEventListener("click", () => {
            console.log(`Removendo livro na posição ${index}`);
            myBooks.splice(index, 1)
            displayBooksOnDom()
        })
        //evento que muda o status do livro
        rowStatusBtn.addEventListener("click", () => {
            if (myBooks[index].status === "lido") {
                myBooks[index].status = "não lido";
            } else {
                myBooks[index].status = "lido";
            }
            displayBooksOnDom();
        });
        
    })
}


//evento que captura os inputs do usuário e armazena em myBooks a partir do botão de "adicionar à biblioteca"
const buttonAddToLibrary = document.querySelector("#addToLibraryBtn")
buttonAddToLibrary.addEventListener("click", () => {
    //assim que clicar, capturar os campos
    const title = document.querySelector("#title").value
    const author = document.querySelector("#author").value
    const pages = document.querySelector("#pages").value
    let status = document.querySelector("#status").checked
    if (status == true){
        status = "lido"
    } else status = "nao lido"
    //assim que capturar os campos, inserir em um objeto e inserir esse objeto no array myBooks
    addBookToLibrary(title, author, pages, status)
    displayBooksOnDom()
})
