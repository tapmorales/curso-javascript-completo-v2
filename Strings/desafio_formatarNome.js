function formatarNome(nomeCompleto) {
    nomeCompleto = nomeCompleto.trim()
    let primeiroEspaco = nomeCompleto.indexOf(" ")
    if (primeiroEspaco < 0) {
        return nomeCompleto
    }

    let primeiroNome = nomeCompleto.slice(0, primeiroEspaco)
    let sobreNome = nomeCompleto.slice(primeiroEspaco + 1)
    return sobreNome + ", " + primeiroNome

}

console.log(formatarNome("Daniel")) // Daniel
console.log(formatarNome("Daniel Morales")) // Morales, Daniel
console.log(formatarNome("Daniel Tapias Morales")) // Tapias Morales, Daniel

console.log("abc def gh".split(" "))