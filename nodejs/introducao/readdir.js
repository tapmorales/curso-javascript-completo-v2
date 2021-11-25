const fs = require("fs")
const path = require("path")

// console.log(path.basename(__filename))

// const files = fs.readdirSync("./files")
// console.log(files)

fs.readdir("./files", (err, files) => {
    if (err) {
        throw err
    }

    console.log(files)
})

console.log("iniciando leitura de diretorio")