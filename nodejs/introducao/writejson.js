const fs = require("fs")
const dado = require('./dados/dados.json')

dado.push({
    name: "Maria",
    lastname: "Souza"
})

fs.writeFile("./dados/dados.json", JSON.stringify(dado), err => { })