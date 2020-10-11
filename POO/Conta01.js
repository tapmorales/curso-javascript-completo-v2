// Desafio conta bancária
/*
1. criar conta abstrata ContaBancária
  - cliente
  - numero
  - saldo
  - depositar(valor)
  - sacar(valor)
*/

class ContaBancaria {
    constructor(cliente, numero) {

        if (this.constructor === ContaBancaria) {
            throw new Error("ContaBancaria é uma classe abstrata")
        }

        this.cliente = cliente
        this.numero = numero
        this.saldo = 0
    }

    depositar(valor) {
        this.saldo += valor
    }
    sacar() {
        throw new Error("metodo sacar() precisa ser implementado")
    }
}

