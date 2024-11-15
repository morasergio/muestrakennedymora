var hombres = parseInt(prompt("Ingrese el numero de hombre en el grupo"))
var mujeres = parseInt(prompt("Ingrese el numero de mujeres que hay en el grupo"))
var total = hombres + mujeres
var porcentajeh = (hombres / total) * 100
var porcentajem = (mujeres / total) * 100
alert("el porcentaje de hombres es: "+porcentajeh+"% y el de mujeres es: "+porcentajem+ "%")