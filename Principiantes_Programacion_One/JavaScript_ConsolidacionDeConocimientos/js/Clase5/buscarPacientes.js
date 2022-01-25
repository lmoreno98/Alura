var botonBuscar = document.querySelector("#buscar-paciente");

botonBuscar.addEventListener("click", function(){

    // Requesicion para leer el json 
    var xhr = new XMLHttpRequest;
    xhr.open("GET","https://alura-es-cursos.github.io/api-pacientes/pacientes.json");
    xhr.addEventListener("load", function(){
        
        var errorAjax = document.querySelector("#error-ajax")
        // si xhr.status == 200 es el codigo para decir que el archivo esta disponible
        if(xhr.status == 200){
            errorAjax.classList.add("invisible");
            var respuesta = xhr.responseText; 

            // Conversion los datos 
            var pacientes = JSON.parse(respuesta);
    
            // Ingreso cada paciente con la funcion ya construida
            pacientes.forEach(function(paciente){
                adicionarPacienteEnLaTabla(paciente);
            });
        }
        else{
            // Codigo 404 el archivo no encontrado
            errorAjax.classList.remove("invisible");
            console.log(xhr.status)
            console.log(xhr.responseText)
        }
    });

    xhr.send();

});