/* <importacion de clases */
import {CuentaCorriente} from './CuentaCorriente.js';
import {Cliente} from './Cliente.js';

const cliente = new Cliente("Luciano", "40980849", "123456");
/* Relacion de clases */
const cuentaDeLuciano = new CuentaCorriente("1","001",cliente);
console.log(cuentaDeLuciano)

let saldo = cuentaDeLuciano.verSaldo();
console.log("El saldo actual es de " + saldo);

/* Depositar en la cuenta */
saldo = cuentaDeLuciano.depositoEnCuenta(500);
console.log("El saldo actual es de " + saldo);

const cliente2 = new Cliente("Juan","38932693","548796");
const cuentaDeJuan = new CuentaCorriente("2","002",cliente2);

cuentaDeLuciano.trasferirParaCuenta(100, cuentaDeJuan);
saldo = cuentaDeJuan.verSaldo()
console.log("El saldo actual de juan es de " + saldo);
saldo = cuentaDeLuciano.verSaldo()
console.log("El saldo actual de luciano es de " + saldo);
console.log(CuentaCorriente.cantidadCuentas);