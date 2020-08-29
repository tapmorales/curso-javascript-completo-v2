function getRandomNumber(inicio = 0, fim = 10, integer = true) {

    let r = Math.random() * (fim - inicio + 1) + inicio
    return integer ? parseInt(r) : r

}

console.log(getRandomNumber(2, 3, false))