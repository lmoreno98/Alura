/* <importacion de clases */
import { Cliente } from './Cliente.js';
import { CuentaAhorro } from './CuentaAhorro.js'
import { CuentaCorriente } from './CuentaCorriente.js'

const cliente = new Cliente("Luciano", "40980849", "123456");
const cuentaDeLuciano = new CuentaCorriente("1", "001", cliente);

const cliente2 = new Cliente("Juan", "38932693", "548796");
const cuentaDeJuan = new CuentaCorriente("2", "002", cliente2);

const cuentaAhorroLuciano = new CuentaAhorro("9985", "001", cliente, 0);


console.log(cuentaDeLuciano);
cuentaDeLuciano.depositoEnCuenta(150);
console.log(cuentaDeLuciano.verSaldo());
cuentaDeLuciano.retirarDeCuenta(70);
console.log(cuentaDeLuciano.verSaldo());
console.log(cuentaDeLuciano);


console.log("----------------------------------------")
console.log(cuentaAhorroLuciano);
cuentaAhorroLuciano.depositoEnCuenta(200);
console.log(cuentaAhorroLuciano.verSaldo());
cuentaAhorroLuciano.retirarDeCuenta(120);
console.log(cuentaAhorroLuciano.verSaldo());
console.log(cuentaAhorroLuciano);