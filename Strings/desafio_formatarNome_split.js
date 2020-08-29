function formatarNome(nomeCompleto) {

    let nomeAsArray = nomeCompleto.split(" ")
    if (nomeAsArray.length === 1) {
        return nomeCompleto
    }

    let primeiroNome = nomeAsArray.shift()
    return nomeAsArray.join(" ") + ", " + primeiroNome

}

console.log(formatarNome("Daniel")) // ["Daniel"]
console.log(formatarNome("Daniel Morales")) // ["Daniel", "Morales"]
console.log(formatarNome("Daniel Tapias Morales")) // ["Daniel", "Tapias", "Morales"]
