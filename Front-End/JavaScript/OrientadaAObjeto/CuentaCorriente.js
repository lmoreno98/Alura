import {Cliente} from './Cliente.js'

/* Exportacion de la clase */
export class CuentaCorriente
{
    numero;
    agencia;
    /* Variable privada */
    #cliente;
    #saldo;
    /* Atributo estatico es comun para todas las cuentas */
    static cantidadCuentas = 0;    
    
    /* Constructor es para inicializar las variables con sus valores principales */
    constructor(numero,agencia,cliente){
        this.numero = numero;
        this.agencia = agencia;
        this.cliente = cliente;
        this.#saldo = 0;
        /* Sumo 1 por cada cuenta */
        CuentaCorriente.cantidadCuentas++;
    }

    
    /* Asignar el cliente */
    set setCliente(valor) {
        /* Guardo el valor de cliente solo si esta en su verdadera forma */
        if( valor instanceof Cliente ){
            this.#cliente = valor;
        }
    }

    /* Ver el cliente */
    get getCliente() {
        return this.#cliente;
    }


    /* Creacion de acciones en la clase */
    depositoEnCuenta(valor){
        if (valor > 0){
            this.#saldo += valor;
        }
        return this.#saldo;
    }

    retirarDeCuenta(valor){
        /* Condicionales para valores negativos */
        if(valor <= this.#saldo && valor >= 0){
            this.#saldo -= valor;
        }
        return this.#saldo;
    }

    verSaldo(){
        return this.#saldo;
    }
    
    trasferirParaCuenta(valor, cuentaDestino){
        this.retirarDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
    }
}