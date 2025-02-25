const obj1 = { 
    uno: 1,
    dos: 2,
    tres: 3
}

const obj2 = { 
    quatro: 4,
    cinco: 5,
    sieis: 6
}

const arrComum = [obj1, obj2]

const teste = arrComum.forEach( (arrEl) =>{ 

    Object.keys(arrEl).forEach( (el) => {
    console.log(arrEl[el])
    })
})
