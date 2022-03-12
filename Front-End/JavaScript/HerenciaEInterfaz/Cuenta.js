/* Creo una classe general para no duplicar codigo  */
export class Cuenta {
    #cliente;
    #saldo;


    constructor(cliente, saldo, numero, agencia) {
        this.agencia = agencia;
        this.numero = numero;
        this.#cliente = cliente;
        this.#saldo = saldo;
    }

    set setCliente(valor) {
        if (valor instanceof Cliente) {
            this.#cliente = valor;
        }
    }

    get getCliente() {
        return this.#cliente;
    }

    depositoEnCuenta(valor) {
        if (valor > 0) {
            this.#saldo += valor;
        }
        return this.#saldo;
    }

    retirarDeCuenta(valor, comision) {
        super._retirarDeCuenta(valor, 0);
    }
    _retirarDeCuenta(valor, comision) {
        valor = valor * (1 + comision / 100);
        if (valor <= this.#saldo && valor >= 0) {
            this.#saldo -= valor;
        }
        return this.#saldo;
    }

    verSaldo() {
        return this.#saldo;
    }

    trasferirParaCuenta(valor, cuentaDestino) {
        this.retirarDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
    }

}