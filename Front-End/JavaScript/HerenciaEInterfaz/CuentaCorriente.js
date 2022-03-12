import { Cuenta } from "./Cuenta.js"

export class CuentaCorriente extends Cuenta {
    static cantidadCuentas = 0;

    constructor(numero, agencia, cliente) {
        super(cliente, 0, numero, agencia);
        CuentaCorriente.cantidadCuentas++;
    }

    retirarDeCuenta(valor) {
        super._retirarDeCuenta(valor, 5);
    }
}