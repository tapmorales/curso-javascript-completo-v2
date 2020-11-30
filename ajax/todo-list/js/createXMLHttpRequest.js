export function createXMLHttpRequest(method, url, cb, data = null) {
    const xhr = new XMLHttpRequest()

    xhr.open(method, url)
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
    xhr.send(data)

    xhr.onreadystatechange = verificaAjax

    function verificaAjax() {
        if (xhr.readyState === 4) {
            if (xhr.status < 400) {
                const json = JSON.parse(xhr.responseText)

                if (typeof cb === "function") {
                    cb(json)
                }

            } else if (typeof cb === "function") {
                cb({
                    error: true,
                    status: xhr.status,
                    message: "algo deu errado com a conexão"
                })

            }
        }
    }
}