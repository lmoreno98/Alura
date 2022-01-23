
var pacientes = document.querySelectorAll(".paciente");
var botonAdicionar = document.querySelector("#adicionar-paciente");

// Agrego un evento al botonAdicionar
botonAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    // Llamo al formulario para tener todos los valores de los inputs
    var form = document.querySelector("#form-adicionar");
    
    // Busco los valores ingresados
    var nombre = form.nombre.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var tabla = document.querySelector("#tabla-pacientes")
    // Funcion para ingresar valores a la tabla
    // Creo la etiqueta para la tabla
    pacienteTr = document.createElement("tr");
    
    // Creo la etiqueta de los valores
    nombreTd = document.createElement("td");
    pesoTd = document.createElement("td");
    alturaTd = document.createElement("td");
    gorduraTd = document.createElement("td");
    imcTd = document.createElement("td");

    // Asocio los valores a las etiquetas creadas
    nombreTd.textContent = nombre;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    // Pongo los valores a la tabla
    pacienteTr.appendChild(nombreTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    // Asocio la tabla creada con la tabla original
    tabla.appendChild(pacienteTr)
});




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
        paciente.style.color = "red";
        paciente.classList.add("paciente-incorrecto");
    }
    if((altura < 0) || (altura > 3.00))
    {
        console.log("Altura incorrecta");
        alturaValido = false;
        tdImc.textContent = "altura incorrecta";
        paciente.classList.add("paciente-incorrecto");
    }
    
    if(pesoValido && alturaValido){
        imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}
