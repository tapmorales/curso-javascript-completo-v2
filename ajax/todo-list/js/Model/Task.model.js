export function Task(title, completed, createdAt, updatedAt) {
    // crie uma funcao construtora chamada Task. 
    // essa funcao recebe por parametro obrigatório o nome da tarefa
    // também recebe tres parametros opcionais (completed, createdAt, updatedAt)
    // o objeto retornado por essa funcao deve ter quatro propriedades:
    //  - title - string - obrigatório, 
    //  - completed - boolean - opcional, false é o default, 
    //  - createdAt - timestamp - opcional, timestamp atual é o valor default)  Date.now()
    //  - updatedAt - timestamp - opcional, null é o valor default
    // o objeto retornado por essa funcao deve ter um método chamado toggleDone, que deve inverter o boolean completed

    if (!title) {
        throw new Error("Task need a required parameter: title")
    }
    let _title = title
    // this.title = title
    this.completed = completed || false
    this.createdAt = createdAt || Date.now()
    this.updatedAt = updatedAt || null
    this.toggleDone = function () {
        this.completed = !this.completed
    }
    this.getTitle = () => _title
    this.setTitle = function (newTitle) {
        _title = newTitle
        this.updatedAt = Date.now()
        console.log("------")
        console.log(this)
    }


}