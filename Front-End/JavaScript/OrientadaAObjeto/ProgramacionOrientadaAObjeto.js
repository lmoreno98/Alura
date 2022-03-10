/* Creacion de clases */

class Cliente
{
    nombreCliente;
    dniCliente;
}

class CuentaCorriente{
    numero;
    saldo;
    /* Variable privada */
    #variablePrivada;
    /* Constructor es para inicializar las variables con sus valores principales */
    constructor(){
        this.saldo = 0;
        this.numero = "";
    }

    /* Creacion de acciones en la clase */
    depositoEnCuenta(valor){
        if (valor > 0){
            this.saldo += valor;
        }
        return this.saldo;
    }

    retirarDeCuenta(valor){
        /* Condicionales para valores negativos */
        if(valor <= this.saldo){
            this.saldo -= valor;
        }
        return this.saldo;
    }

    verSaldo(){
        return this.saldo;
    }
}

/* Asignacion valores a la primer clase */

const cliente1 = new Cliente();
cliente1.nombreCliente = "Luciano";
cliente1.dniCliente = "40980849";

const cuentaCorriente1 = new CuentaCorriente;
cuentaCorriente1.numero = "312464765";
cuentaCorriente1.saldo = 1500;

const cliente2 = new Cliente();
cliente2.nombreCliente = "Juan";
cliente2.dniCliente = "38932693";

const cuentaCorriente2 = new CuentaCorriente;
cuentaCorriente2.numero = "454797445";
cuentaCorriente2.saldo= 2000;



console.log(cliente1);
console.log(cuentaCorriente1);
console.log(cliente2);
console.log(cuentaCorriente2);

/* Usamos la accion de deposito */
cuentaCorriente2.depositoEnCuenta(500);
console.log(cuentaCorriente2);

/* Extraccion y verificacion de valores negativos */
cuentaCorriente2.retirarDeCuenta(500);
console.log(cuentaCorriente2);
cuentaCorriente2.retirarDeCuenta(3000);
console.log(cuentaCorriente2);


/* Ver el saldo */
let saldo = cuentaCorriente1.verSaldo();
console.log("El saldo en cuenta es de " + saldo);

/* Desglose de la clases en distintos archivos
    Creacion del archivo package.json con el comando en consola npm init */