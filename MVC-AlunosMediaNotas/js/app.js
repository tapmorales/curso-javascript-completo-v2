const alunosold = [
  {
    _id: 0,
    nome: "chico melato",
    notas: {
      portugues: [1, 1, 2, 2],
      matematica: [2, 2, 2, 2],
      historia: [5, 5, 5, 5],
      ciencias: [3, 3, 3, 3],
    },
  },
  {
    _id: 1,
    nome: "talita lima",
    notas: {
      portugues: [10, 10, 10, 10],
      matematica: [4, 4, 5, 5],
      historia: [5, 5, 6, 6],
      ciencias: [7, 7, 8, 9],
    },
  },
];
const alunosService = new AlunosService()

const alunosView = new AlunosView(
  document.querySelector('[data-table-alunos]'),
  new MateriasService().materias

)

const alunosController = new AlunosController(alunosService, alunosView)

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault()
  const nome = document.getElementById("first_name").value

  alunosController.add({ nome })
})

document.querySelector("#search_name").addEventListener("input", function () {
  const name = this.value
  sessionStorage.setItem("search", name)

  if (name.length > 2 || name.length === 0) {
    alunosController.search(name)
  }

})

const inputEvent = new Event("input")
const inputEvent_IE = document.createEvent("Event")
inputEvent_IE.initEvent("input", true, true)

if (sessionStorage.getItem("search")) {
  document.querySelector("#search_name").value = sessionStorage.getItem("search")
  // document.querySelector("#search_name").dispatchEvent(inputEvent)
  document.querySelector("#search_name").dispatchEvent(inputEvent_IE)


}