var paciente = document.querySelector("#primer-paciente");

// Puedo acceder al peso desde el paciente haciendo un query selector
var tdPeso = paciente.querySelector(".info-peso");
// Guardo solo el valor de peso 
var peso = tdPeso.textContent;

// Lo mismo para sacar la altura
var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

// Saco el imc
var tdImc = paciente.querySelector(".info-imc");

//Calculo del imc: peso / altura * altura
var imc;

var pesoValido = true;
var alturaValido = true;

if((peso < 0) || (peso > 1000))
{
    console.log("Peso incorrecto");
    pesoValido = false;
    tdImc.textContent = "Peso incorrecto"
}
if((altura < 0) || (altura > 3.00))
{
    console.log("Altura incorrecta");
    alturaValido = false;
    tdImc.textContent = "altura incorrecta"
}

if(pesoValido && alturaValido){
    imc = peso / (altura * altura);
    tdImc.textContent = imc;
}