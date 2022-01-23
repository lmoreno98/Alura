var pacientes = document.querySelectorAll(".paciente");

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
        tdImc.textContent = calculoImc(peso,altura);
    }
}

function calculoImc(peso,altura){
    var imc = peso / (altura * altura);
    return imc.toFixed(2)
}