var botonAdicionar = document.querySelector("#adicionar-paciente");

botonAdicionar.addEventListener("click",function(event){
    event.preventDefault();
    var form = document.querySelector("#form-adicionar");
    var paciente = capturarDatosPacientes(form);
    var pacienteTr = construirTr(paciente);
    var errores = validarPaciente(paciente);

    if (errores.length > 0){
        exibirMensajesErrores(errores)
        return;
    }
    var tabla = document.querySelector("#tabla-pacientes");
    tabla.appendChild(pacienteTr);

    // Limpio los valores al precionar el boton
    form.reset();
    var mensajesErrores = document.querySelector("#mensaje-errores");
    mensajesErrores.innerHTML = "";
});

function capturarDatosPacientes(form){

    // Capturamos los datos del formulario
    // Creo una clase para capturarlo
    var paciente = {
        nombre:  form.nombre.value,
        peso:  form.peso.value,
        altura:  form.altura.value,
        gordura:  form.gordura.value,
        imc: calcularIMC(form.peso.value,form.altura.value)
    }
    return paciente;
}

function construirTr(paciente)
{

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente")     

    // Asignacion al tr de los td y a la tabla tr
    pacienteTr.appendChild(construirTd(paciente.nombre, "info-nombre"));
    pacienteTr.appendChild(construirTd(paciente.peso,"info-peso"));
    pacienteTr.appendChild(construirTd(paciente.altura,"info-altura"));
    pacienteTr.appendChild(construirTd(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(construirTd(paciente.imc,"info-imc"));

    return pacienteTr;
}



function construirTd(dato, clase){
    var td = document.createElement("td");
    td.classList.add(clase);
    td.textContent = dato;
    return td;

}

function validarPaciente(paciente){
    var errores = [];

    if(paciente.nombre.length == 0){
        errores.push("El nombre no puede estar vacio");
    }
    if(paciente.peso.length == 0){
        errores.push("El peso no puede estar vacio");
    }
    if(paciente.altura.length == 0){
        errores.push("La altura no puede estar vacio");
    }
    if(paciente.gordura.length == 0){
        errores.push("El %gordura no puede estar vacio");
    }
    if(!validarPeso(paciente.peso)){
        errores.push("El peso es incorrecto");
    }
    if(!validarAltura(paciente.altura)){
        errores.push("La altura es incorrecta");
    }

    return errores;
}

function exibirMensajesErrores(errores){
    
    var ul = document.querySelector("#mensajes-errores")
    
    // Dejar vacia la lista
    ul.innerHTML = "";

    // EL forEach utiliza una funcion y se los pasa a cada valor de la variable pasada
    errores.forEach(function(error){
        var li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
    });
}
