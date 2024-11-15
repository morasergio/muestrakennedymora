var nota1 = parseInt(prompt("Ingrese la primera nota"))
var nota2 = parseInt(prompt("Ingrese la segunda nota"))
var nota3 = parseInt(prompt("Ingrese la tercera nota"))
var total = (nota1 + nota2 + nota3)/3
if(total>=7){
	alert("el alumno esta aprobado")
}else{
	alert("el alumno esta desaprobado")
}