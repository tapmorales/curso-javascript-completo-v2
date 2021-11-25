const fs = require("fs")

const ws = fs.createWriteStream("./file.md", "UTF-8")

ws.write("# ola mundao")

const readStream = fs.createReadStream("./swapi.json", "UTF-8")
const writeStream = fs.createWriteStream("./swapi_clone.json", "UTF-8")

// readStream.on("data", data => {
//     writeStream.write(data)
// })

readStream.pipe(writeStream).on("finish", () => {
    console.log("finish")
})


