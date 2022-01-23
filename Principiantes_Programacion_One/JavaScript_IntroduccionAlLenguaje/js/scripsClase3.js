
// Capturo todo el tamaño del la tabla con querySelectorAll
var pacientes = document.querySelectorAll(".paciente");


// Leo todos los valores de la tabla y cambio el imc
for(var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i]
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    var tdImc = paciente.querySelector(".info-imc");
    var imc;
    
    var pesoValido = true;
    var alturaValido = true;
    
    if((peso < 0) || (peso > 1000))
    {
        console.log("Peso incorrecto");
        pesoValido = false;
        tdImc.textContent = "Peso incorrecto";
        // Cambiar el color de la letra
        paciente.style.color = "red";
        paciente.classList.add("paciente-incorrecto")
    }
    if((altura < 0) || (altura > 3.00))
    {
        console.log("Altura incorrecta");
        alturaValido = false;
        tdImc.textContent = "altura incorrecta";
        // Cambiar el color del fondo
        paciente.style.backgroundColor = "ligth red";
        // La mejor forma es con el archivo css
        paciente.classList.add("paciente-incorrecto")
    }
    
    if(pesoValido && alturaValido){
        imc = peso / (altura * altura);
        // El comando toFixed() nos deja poner la cantidad de decimales que queremos mostrar
        tdImc.textContent = imc.toFixed(2);
    }
}
