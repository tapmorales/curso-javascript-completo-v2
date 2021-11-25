const http = require("http")
const fs = require("fs")

http.createServer((req, res) => {
    // res.writeHead(200, { "Content-Type": "text-plain" })

    //     res.end(`
    //     <!DOCTYPE html>
    //     <html>
    //     <head>
    //         <title>Ola Mundo !!!</title>
    //     </head>
    //     <body>
    //         <h1>Ola Mundo !!!</h1>
    //         <p>url: ${req.url}</p>
    //     </body>
    //     </html>
    // `)



    switch (req.url) {
        case "/":
        case "/index.html":

            return fs.readFile("./index.html", (err, html) => {
                if (err) {
                    res.writeHead(500)
                    res.end("<h1>Deu erro </h1>")
                }

                res.writeHead(200, { "Content-Type": "text/html" })
                const convertToTemplate = new Function("return `" + html + "`")

                res.end(convertToTemplate.call(req))

            })
        case "/estilo/estilo.css":
            res.writeHead(200, { "Content-Type": "text/css" })
            return res.end("body {color: red; }")
        case "/img/logo.png":
            res.writeHead(200, { "Content-Type": "image/png" })
            return fs.createReadStream("./logo.png").pipe(res)
        default:
            res.writeHead(404, { "Content-Type": "text/html" })
            res.end("<h1>404</h1>")

    }

}).listen(3000)

console.log("servidor rodando na porta 3000 \n http://localhost:3000")