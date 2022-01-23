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
    imcTd.textContent = calculoImc(peso,altura);

    // Pongo los valores a la tabla
    pacienteTr.appendChild(nombreTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    // Asocio la tabla creada con la tabla original
    tabla.appendChild(pacienteTr);
    
    // Dejo en blanco los valores
    form.nombre.value = "";
    form.peso.value = "";
    form.altura.value = "";
    form.gordura.value = "";
});