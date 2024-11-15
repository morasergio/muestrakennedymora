function sumaPrimerosN(n){
	let suma=0;
	for(let i = 1; i<n;i++){
		suma +=i;
	}
	return suma;
}
let n=10
alert("la suma del 1 al " +(n-1)+ " es: "+sumaPrimerosN(n))