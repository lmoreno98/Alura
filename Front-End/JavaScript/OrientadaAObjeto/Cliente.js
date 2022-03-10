/* Creacion de la clase cliente */
export class Cliente
{
    nombreCliente;
    dniCliente;
    rutCliente;

    /* Con esto podemos inicializar los valores como si fuera una funcion */
    constructor(nombreCliente, dniCliente, rutCliente){
        this.nombreCliente = nombreCliente;
        this.dniCliente = dniCliente;
        this.rutCliente = rutCliente;

    }
}
