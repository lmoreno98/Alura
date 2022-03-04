console.log("Mi Primer Programa");
console.log(2 + 2);

/* Creacion de contantes */
const nombre = "Luciano"
console.log(nombre);
const edad = 24;
console.log(edad);
console.log(nombre);



/* Concatenacion */
console.log("Mi nombre es " + nombre + " Y tengo " + edad + "años");



/* Key sensitive en la creacion de variables */
const nombreMadre = "María";
const NombreMadre = "Teresa";
console.log(nombreMadre);
console.log(NombreMadre);



/* Tipos de datos */
/* const es para variables constantes osea no se puede cambiar luego de ser creadas */
console.log("Operaciones aritmeticas");
const variableTexto = "variableTexto";
console.log(variableTexto);



/* let es para crear variables que se puedan cambiar en el transcurso del programa y son para varialbes locales */
let = nuevaPalabra = "Hola";
console.log(nuevaPalabra);
nuevaPalabra = "Chau";
console.log(nuevaPalabra);



/* var es como let pero son variables globales */
let = nuevaPalabraGlobal = "Casa";
console.log(nuevaPalabraGlobal);
nuevaPalabraGlobal = "Perro";
console.log(nuevaPalabraGlobal);



/* Comversion de tipos de datos */
console.log("10" + "2");
console.log(parseInt("10") + parseInt("2"));



/* Asignacion de valores */
const miNombre = "Luciano";
const miApellido = "Moreno";
const miNombreCompleto = miNombre + " " + miApellido;
console.log(miNombreCompleto);


/* Plantillas con distintos tipos de comillas */
const textoMiNombreDobladas = `Mi nombre es: ${miNombre} ${miApellido}`;
console.log(textoMiNombreDobladas);

const textoMiNombresimples = 'Mi nombre es: ${miNombre} ${miApellido}';
console.log(textoMiNombresimples);

const textoMiNombreDobles = "Mi nombre es: ${miNombre} ${miApellido}";
console.log(textoMiNombreDobles);

/* Listas */
const ciudadesDisponibles = ["Bogotá", "Lima", "Santiago", "Buenos Aires"]
console.log(ciudadesDisponibles);

/* Agregado de elementos en listas */
const paisesDisponibles = new Array();
paisesDisponibles.push("Argentina");
paisesDisponibles.push("Colombia");
paisesDisponibles.push("Peru")
console.log(paisesDisponibles);

/* Operadores Logicos */
/* if y else if */
const edadComprador = 25;
const estaAcompanado = true;
const tienePasaje = true;

if (edadComprador >= 18 || estaAcompanado) {
    console.log("Es posible vender viaje");
    console.log("Ciudades disponibles para viaje");
    console.log(ciudadesDisponibles);
}
else {
    console.log("El comprador no es mayor de edad");
    console.log("No es posible ofrecer viajes");
}

console.log("Proceso de embarque: \n \n \n");
if(tienePasaje && edadComprador >= 18){
    console.log("Comprador con pasaje. Feliz Viaje");
}

/* Bucles */
let posicion = 0;
ciudadElegida = "Lima";
while(posicion < ciudadesDisponibles.length){
    if(ciudadesDisponibles[posicion] == ciudadElegida){
        console.log("Destino disponible");
    }
    else{
        console.log("Destino no disponible");
    }
    posicion = posicion + 1;
}