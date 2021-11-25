const fs = require("fs")
const https = require("https")

const options = {
    hostname: "serfrontend.com",
    port: 443,
    path: "/cursos/index.html",
    method: "GET"
}

const writeStream = fs.createWriteStream("./index.html", "UTF-8")

const request = https.request(options, (res) => {
    res.setEncoding("UTF-8")
    let response = ""
    // res.on("data", data => {
    //     console.log(data.length)
    //     response += data
    //     writeStream.write(data)
    // })

    res.on("end", () => {
        // fs.writeFile("./index.html", response, err => {
        //     if (err) throw err
        //     console.log("index.html baixado")
        // })
        console.log("index.html lido")
    })

    writeStream.on("finish", () => {
        console.log("index.html baixado - writeStream")
    })

    res.pipe(writeStream).on("finish", () => {
        console.log("finish do pipe")
    })
})


request.end()
