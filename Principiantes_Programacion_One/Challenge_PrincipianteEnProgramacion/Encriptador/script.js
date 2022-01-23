var mensajeEntrada = document.querySelector("#input-texto");
var encriptar =  document.querySelector("#btn-encriptar");
var desencriptar = document.querySelector("#btn-desencriptar")
var salida = document.querySelector("#msg")
var copiarButton = document.querySelector('#btn-copiar')
mensajeEntrada.value = ""
salida.value = ""

function encriptado(){

	var mensajeModif = [];
	var mensajeEntradaVal = mensajeEntrada.value;
	for(var i = 0; i < mensajeEntradaVal.length; i++){
			
		//Verifico y cambio todos los valores
		if(mensajeEntradaVal[i] == "a"){
			mensajeModif[i] = "ai";
		}
		else if(mensajeEntradaVal[i] == "e"){
			mensajeModif[i] = "enter";
		}
		else if(mensajeEntradaVal[i] == "i"){
			mensajeModif[i] = "imes";
		}
		else if(mensajeEntradaVal[i] == "o"){	
			mensajeModif[i] = "ober";
		}
		else if(mensajeEntradaVal[i] == "u"){
			mensajeModif[i] = "ufat";
		}
		else{
			mensajeModif[i] = mensajeEntradaVal[i];
		}
	}
	mensajeModif = mensajeModif.join("");
	salida.value = mensajeModif;
	mensajeEntrada.value = ""
	mensajeEntrada.focus();
}

function desencriptado(){

	var mensajeModif = [];
	var mensajeEntradaVal = mensajeEntrada.value;
	for(var i = 0; i < mensajeEntradaVal.length; i++){
		
	//Verifico y cambio todos los valores
	if(mensajeEntradaVal[i] == "a" && mensajeEntradaVal[i+1] == "i"){
		mensajeModif[i] = "a"
		i++;
	}
	else if(mensajeEntradaVal[i] == "e"   &&
			mensajeEntradaVal[i+1] == "n" &&
			mensajeEntradaVal[i+2] == "t" &&
			mensajeEntradaVal[i+3] == "e" &&
			mensajeEntradaVal[i+4] == "r"){
			mensajeModif[i] = "e";
		i = i+4;
	}
	else if(mensajeEntradaVal[i] == "i"   &&
			mensajeEntradaVal[i+1] == "m" &&
			mensajeEntradaVal[i+2] == "e" &&
			mensajeEntradaVal[i+3] == "s"){
			mensajeModif[i] = "i";
		i = i+3;
	}
	else if(mensajeEntradaVal[i] == "o"   &&
			mensajeEntradaVal[i+1] == "b" &&
			mensajeEntradaVal[i+2] == "e" &&
			mensajeEntradaVal[i+3] == "r") {
				mensajeModif[i] = "o";
			i = i +3;
	}
	else if(mensajeEntradaVal[i] == "u"   &&
			mensajeEntradaVal[i+1] == "f" &&
			mensajeEntradaVal[i+2] == "a" &&
			mensajeEntradaVal[i+3] == "t"){
			mensajeModif[i] = "u";
		i = i + 3;
	}
	else{

		mensajeModif[i] = mensajeEntradaVal[i];
	}
}
	mensajeModif = mensajeModif.join("");
	salida.value = mensajeModif;
	mensajeEntrada.value = ""
	mensajeEntrada.focus();
}
function copiar(){

	// Copio en el portapapeles la salida
	salida.select()
	document.execCommand("copy");
	
	mensajeEntrada.value = salida.value
	salida.value = ""
	mensajeEntrada.focus();

}
	mensajeEntrada.focus();

// Llamo a todos los botones
encriptar.onclick = encriptado;
desencriptar.onclick = desencriptado;
copiarButton.onclick = copiar;