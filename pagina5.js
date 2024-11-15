var cantA= parseInt(prompt("Ingrese La cantidad de gente que hizo el cuestionario A:"))
var cantB = parseInt(prompt("Ingrese La cantidad de gente que hizo el cuestionario B:"))
var cantC = parseInt(prompt("Ingrese La cantidad de gente que hizo el cuestionario C:"))
var tiempoA= 5;
var tiempoB= 8;
var tiempoC= 6;
var totalminutos= (cantA * tiempoA)+(cantB*tiempoB)+(cantC*tiempoC)
var horas =(totalminutos / 60);
var minutos = totalminutos % 60;
alert("la cantidad de horas y minutos que estuvo corrigiendo fueron de " + horas + " horas y " + minutos + " Minutos")