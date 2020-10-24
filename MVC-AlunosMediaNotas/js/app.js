

// Calcula a media por materia de cada aluno e cria uma propriedade chamada media
alunos.forEach( aluno => {
    aluno.media = {}

    for(let materia in aluno.notas){
        aluno.media[materia] = avarege(...aluno.notas[materia])       
    }
})


//Inserir no thead "nome" e cada uma das materias
const htmlHeader = document.createElement("tr")
htmlHeader.innerHTML = "<td>Nome</td>"

let htmlheaderMaterias = Object.keys(alunos[0].notas).map(materia => {
    console.log(materia)
    return "<td>" + materia + "</td>"
}).join("")
console.log(htmlheaderMaterias)
htmlHeader.innerHTML += htmlheaderMaterias

document.querySelector("[data-table-alunos] thead").appendChild(htmlHeader)


//percorrer cada aluno e gerar o html para incluir do tbody
alunos.forEach( aluno => {
    const htmlBody = document.createElement("tr")
    let htmlMedias = `<td>${aluno.nome}</td>`
    Object.keys(aluno.notas).forEach( materia => {
        htmlMedias += `<td>${aluno.media[materia]}</td>`
    } )
    htmlBody.innerHTML = htmlMedias
    document.querySelector("[data-table-alunos] tbody").appendChild(htmlBody)
})