// const obj1 = { 
//     uno: 1,
//     dos: 2,
//     tres: 3
// }

// const obj2 = { 
//     quatro: 4,
//     cinco: 5,
//     sieis: 6
// }

// const arrComum = [obj1, obj2]

// const teste = arrComum.forEach( (arrEl) =>{ 

//     Object.keys(arrEl).forEach( (el) => {
//     console.log(arrEl[el])
//     })
// })

// function Book (title, author, pages, status) {
//     this.title = title
//     this.author = author
//     this.pages = pages
//     this.status = status
//     this.info = function (){
//         return `${this.title} by ${this.author}, ${this.pages} pages, ${this.status}`
//     }
// }

// const livro = new Book ("auto", "drew", 10, "nao lido")

const button = document.querySelector("#addToLibraryBtn")

button.addEventListener("click", () => {
    const teste = document.querySelector("#status").checked
    console.log(`debug ${teste}`)
})