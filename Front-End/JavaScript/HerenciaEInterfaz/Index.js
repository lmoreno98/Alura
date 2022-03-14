/* <importacion de clases */
import { Cliente } from './Cliente.js';
import { CuentaAhorro } from './Cuentas/CuentaAhorro.js'
import { CuentaCorriente } from './Cuentas/CuentaCorriente.js'
import { Cuenta } from "./Cuentas/Cuenta.js"
import { CuentaNomina } from './Cuentas/CuentaNomina.js';
import { Empleado } from './Empleados/Empleado.js';
import { Director } from './Empleados/Director.js';
import { Gerente } from './Empleados/Gerente.js'
import { SistemaAutenticacion } from './SistemaAutenticacion.js'

const cliente = new Cliente("Luciano", "40980849", "123456");
const cuentaDeLuciano = new CuentaCorriente("1", "001", cliente);

const cliente2 = new Cliente("Juan", "38932693", "548796");
const cuentaDeJuan = new CuentaCorriente("2", "002", cliente2);

const cuentaAhorroLuciano = new CuentaAhorro("9985", "001", cliente, 0);
const cuentaNominaLuciano = new CuentaNomina(cliente, "314", "001");


const empleado = new Empleado("Juan Perez", "2145679", 10000);
empleado.asignarClave("123456");
const gerente = new Gerente("Juan Gomez", "84661614", 12000);
gerente.asignarClave("789456");
//const director = new Director("Juan Gonzalez", "746464648", 15000);

console.log(SistemaAutenticacion.login(empleado, "123456"));
console.log(SistemaAutenticacion.login(gerente, "789456"));

const cliente3 = new Cliente("Jorge", "15467988", "123456");
cliente3.asignarClave("01111");
console.log(SistemaAutenticacion.login(cliente3, "01111"));