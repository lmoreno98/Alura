import { Cuenta } from "./Cuenta.js"

export class CuentaAhorro extends Cuenta {
    constructor(numero, agencia, cliente, saldo) {
        super(cliente, 0, numero, agencia);
    }

    retirarDeCuenta(valor) {
        super._retirarDeCuenta(valor, 2);
    }

}