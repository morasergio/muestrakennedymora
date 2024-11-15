var num1 = parseInt(prompt("Ingrese el primer numero"))
var num2 = parseInt(prompt("Ingrese el segundo numero"))
alert("seleccione la operacion")
var eleccion = prompt("1:suma / 2:resta / 3:multiplicacion / 4:division / 5: salir")
var total
switch(eleccion){
 case "1":
 total = num1 + num2
 break;
 case "2":
 total = num1 - num2
 break;
 case "3":
 total = num1 * num2
 break;
 case "4":
 total = num1/num2
 break;
}
alert("El total es de: "+total)