function verificaredad(){
	const edad = prompt("Digame su edad: ");
	const edadnumerica = parseInt(edad);
	const cajados = document.getElementById('cajados');

	if (!isNaN(edadnumerica)) {
		let resultado;
		if (edadnumerica >= 18) {
			resultado = "Eres mayor de edad"
		}else{
			resultado = "Eres menor de edad"
		}
		cajados.textContent = resultado;  
	}else{
		alert("Ingrese algun numero por favor");
	}
}