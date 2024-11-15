var num1 = parseInt(prompt("Ingrese el primer numero"))
var num2 = parseInt(prompt("Ingrese el segundo numero"))
var total = 0
if(num1==num2){
	total = num1 * num2
}else if(num1>num2){
    total = num1 - num2
}else{
	total = num1 + num2
}
alert("el total es de: "+total)