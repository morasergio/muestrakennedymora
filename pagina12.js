var num1 = parseInt(prompt("Ingrese la cantidad de kilos de manzanas que va a comprar"))
var precio = parseInt(prompt("Ingrese cuanto vale el kilo"))
if(num1<2){
	total = precio
}else if(num1<=5){
	total = precio * 0.90
}else if(num1<=10){
	total = precio * 0.85
}else{
	total = precio * 0.80
}

alert("el precio final va a ser: "+total)