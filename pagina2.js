var hora = parseInt(prompt("Ingrese la hora"))
var min= parseInt(prompt("Ingrese los minutos"))
var seg= parseInt(prompt("ingrese los segundos"))
var segundost = (hora * 60) * 60 + min * 60 + seg
alert("los segundos totales son: " +segundost)