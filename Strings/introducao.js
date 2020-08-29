
let str1 = "Minha String Bacanuda"
console.log(str1.replace(/i/g, "o"))
console.log(str1)

// console.log(str1.indexOf("asdasdas"))
// console.log(str1.includes("asdasdas"))
// console.log(str1.indexOf("asdasdas"))
// console.log(str1.indexOf("asdasdas") >= 0)

console.log(str1.slice(2))
console.log(str1.substring(2))

console.log(str1.slice(-5, -2))
console.log(str1.substring(-5, -2))

console.log(str1.slice(8, 1))
console.log(str1.substring(8, 1))

console.log(str1.toUpperCase())
console.log(str1.toLowerCase())
console.log(str1)

let strAsObj = new String("minha string como objeto")
console.log(strAsObj)
console.log(strAsObj.valueOf())
console.log(strAsObj.toString())
console.log("--------------------")
/*str1 = `
     
    teste
               
`*/
console.log(str1)
console.log("--------------------")
console.log(str1.trim())
console.log("--------------------")
console.log(str1.trimEnd())
console.log("--------------------")
console.log(str1.trimStart())
console.log("--------------------")
console.log(str1)

str1 = "0123456789"
console.log(str1.padEnd(20))
console.log(str1.padEnd(20, "*"))
console.log(str1.padEnd(20, "*").length)
console.log(str1)

let telefone1 = "91234-2345" //"9****-**45"
let telefone2 = "1234-2345"  //"1***-**45"
function mascararTelefone(numero) {
    let hifemPosicao = numero.indexOf("-")
    let numeroInicio = numero.slice(0, hifemPosicao)
    let numeroFinal = numero.slice(hifemPosicao + 1)
    let doisUltimosNumeros = numeroFinal.slice(-2)
    return `${numeroInicio[0].padEnd(numeroInicio.length, "*")}-${doisUltimosNumeros.padStart(numeroFinal.length, "*")}`

}
console.log(mascararTelefone(telefone1))
console.log(mascararTelefone(telefone2))

let str2 = "Hoje é Sábado"
console.log(str2.startsWith("oje", 1))

console.log(str2.endsWith("é", 6))

let str3 = "abcdefgh"
console.log(str3.charAt(1))
console.log(str3[1])
console.log(str3.charCodeAt(0))
console.log(str3.charCodeAt(1))

/*
replace(),          replaceAll() **
indexOf(),          lastIndexOf(),          includes()*,
slice(),            substring(),            split(),
toLowerCase(),      toUpperCase(),
valueOf(),
trim()*,            trimEnd()*,             trimStart()*,
padStart()*,        padEnd()*,
startsWith()*,      endsWith()*,
charAt(),           charCodeAt()            e length */
