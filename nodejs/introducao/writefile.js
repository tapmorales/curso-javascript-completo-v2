const fs = require("fs")

const md = `
# Este é um conteudo criado dinamicamente

* item 1
* item 2
`

const users = [{ name: "daniel", lastname: "morales" }]

fs.writeFile('./files/teste.md', md.trim(), err => {
    if (err) {
        throw err
    }
    console.log("arquivo salvo")
})

const createDados = () => {
    fs.writeFile('./dados/dados.json', JSON.stringify(users), err => {
        if (err) {
            throw err
        }
        console.log("arquivo json salvo")
    })
}

if (!fs.existsSync("dados")) {
    fs.mkdir("dados", err => {
        if (err) {
            throw err
        }
        createDados()
    })
} else {
    createDados()
}

