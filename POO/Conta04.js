// Desafio conta bancária
/*
4. Agora surgiu a necessidade de Cliente ser Pessoa Física ou Juridica. 
   Pessoa Física tem documento CPF e Juridica tem documento CNPJ
*/

class Cliente {
    constructor(nome, documento, tipoDocumento) {
        if (this.constructor === Cliente) {
            throw new Error("Cliente é uma classe abstrata")
        }
        this.nome = nome
        this.documento = documento
        this.tipoDocumento = tipoDocumento
    }
}

class PessoaFisica extends Cliente {
    constructor(nome, documento) {
        super(nome, documento, "CPF")
    }
}
class PessoaJuridica extends Cliente {
    constructor(nome, documento) {
        super(nome, documento, "CNPJ")
    }
}
const cliente1 = new PessoaFisica("daniel", "12.133.144-30")
const cliente2 = new PessoaJuridica("daniel lanches", "122.133.144/0001-01")

console.log(cliente1)
console.log(cliente2)


class ContaBancaria {
    constructor(cliente, numero) {

        if (this.constructor === ContaBancaria) {
            throw new Error("ContaBancaria é uma classe abstrata")
        }

        this.cliente = cliente
        this.numero = numero
        this.saldo = 0
    }

    get dadosCliente() {
        return `${this.cliente.nome}, ${this.cliente.tipoDocumento}: ${this.cliente.documento}`
        // if (this.cliente.constructor === PessoaFisica) {
        //     return `${this.cliente.nome}, documento: ${this.cliente.cpf}`
        // } else {
        //     return `${this.cliente.nome}, documento: ${this.cliente.cnpj}`
        // }
    }

    depositar(valor) {
        this.saldo += valor
    }
    sacar() {
        throw new Error("metodo sacar() precisa ser implementado")
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(cliente, numero) {
        super(cliente, numero)
        this.aniversario = Date.now()
    }

    sacar(valor) {
        if (valor > this.saldo) {
            throw new Error("Saldo insuficiente")
        }
        this.saldo -= valor
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(cliente, numero) {
        super(cliente, numero)
        this.limite = 0
    }

    sacar(valor) {
        let disponivel = this.saldo + this.limite
        if (valor > disponivel) {
            throw new Error("Saldo insuficiente")
        }
        this.saldo -= valor
    }
}

const daniel = new PessoaFisica("daniel", "12.133.144-10")
const maria = new PessoaJuridica("maria", "123.123.123/0001-01")

const cp1 = new ContaPoupanca(daniel, 1)
const cp2 = new ContaPoupanca(maria, 2)
const cc1 = new ContaCorrente(maria, 3)
cp1.depositar(1000)
cc1.limite = 1000
cc1.depositar(2000)
cc1.sacar(3000)
console.log(cc1)


cp1.sacar(500)
console.log(cp1)
console.log(cp2)

console.log(cc1.dadosCliente)
console.log(cp1.dadosCliente)
console.log(cp2.dadosCliente)



