const delay = (ms) => {
    const startTime = new Date().getTime()
    while (new Date().getTime() - startTime <= ms) {
        // espera um pouco
    }
}

this.addEventListener("message", function (e) {
    console.log(e)
    console.log(e.data)
    delay(3000)
    self.postMessage("processo demorado finalizado")
})