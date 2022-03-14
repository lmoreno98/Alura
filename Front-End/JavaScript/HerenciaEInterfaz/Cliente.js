/* Creacion de la clase cliente */
export class Cliente {
    nombreCliente;
    dniCliente;
    rutCliente;
    #clave;
    /* Con esto podemos inicializar los valores como si fuera una funcion */
    constructor(nombreCliente, dniCliente, rutCliente) {
        this.nombreCliente = nombreCliente;
        this.dniCliente = dniCliente;
        this.rutCliente = rutCliente;
        this.#clave = ""
    }

    asignarClave(clave) {
        this.#clave = clave;
    }

    autenticable(clave) {
        return true;
    }
}
