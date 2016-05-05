/*.......................................
.........EJERCICIOS CICLOS 1.............
.......................................*/

/*Pseudocodigo*/
/*	1. Inicio
	2. Escribir la descripcion del problema
	3. Inicializar n=1 y sum=0
	4. Mientras n<=10
		4a. Leer num
		4b. Realizar operacion de sum mas num en Sum
		4c. Realizar operacion de contador n+1 en n
	5. De lo contrario
		5a. Escribir sum
	6. Fin
*/
alert("Suma de 10 numeros")
var n=1
sum = 0
while (n<=10) {
	var num = prompt("Ingresa un numero a sumar")
	sum = parseInt(sum) + parseInt(num)
	n= (n+1)
}
alert("la suma de los numeros que ingresaste es de " + sum)

/*.......................................
.........EJERCICIOS CICLOS 2.............
.......................................*/

/*Pseudocodigo*/
/*	1. Inicio
	2. Escribir la descripcion del problema
	3. Inicializar I=1 y s=0
	4. Repite i = i+1
		4a. Leer numero
		4b. Realizar la operacion de s mas numero en S
		4c. HastA que i<=10
		4d. Regresa a paso 4
	5. De lo contrario
		5a. Escribir s
	6. Fin  
*/

alert("SUMA DE 10 NUMEROS CON ESTRUCTURA "DO WHILE"")
var i=1
var s=0
do{
	i++	
	var numero = prompt ("Ingresa numero a sumar")
	s = parseInt(s) + parseInt (numero)
}
while (i<=10)
alert("La suma de los numeros es " +s)


/*.......................................
.........EJERCICIO CICLOS 3.............
.......................................*/

/*Pseudocodigo*/
/*	1. Inicio
	2. Escribir la descripcion del problema
	3. Inicializar su=0
	4. Para conta=0, conta<10, conta=conta+1
		4a. Leer nume
		4b. Realizar la operacion de su mas nume en su
	5. De lo contrario
		5a. Escribir su
	6. Fin  
*/

alert("SUMA DE 10 NUMEROS ENTEROS, ESTRUCTURA FOR")
su = 0
for (var conta = 0; conta < 10; conta++){
	var nume = prompt ("Ingresa numero a sumar")
	su = parseInt(su) + parseInt (nume)
}
alert("La sumatoria de los numeros es " +su)

/*.......................................
.........EJERCICIO CICLOS 4.............
.......................................*/

/*Pseudocodigo*/
/*	1. Inicio
	2. Escribir la descripcion del problema
	3. Leer ene
	4. Inicializar contador=1, sumap=0
	5. Repite contador < = ene
		5a. Leer pr
		5b. Realizar la operacion de sumap= sumap+pr
		5c. Realizar la operacion de prome=sumap/ene
		4c. contador+1
	6. De lo contrario
		6a. Escribir prome
	
	7. Leer x
	8. Inicializar y=1 y sumapr=0
	9. Hacer y= y+1
		9a. leer ingresa
		9b. Realiza la operacion sumapr = sumapr+ingresa
		9c. Realiza la operacion promed = sumapr / x
	10. Mientras y<=x 
		10a. Repite paso 9a
	11. De lo contario 
		11a. Escribe promed 

	12. Leer xa
	13. Inicializar sp=0
	14. Para h=0, h<=xa, h=h+1
		14a. Leer califica
		14b. Realiza la operacion sp = sp+califica
		14c. Realiza la operacion promedio = sp / xa 
	15. De lo contrario
		15a. Escribe promedio
	16. Fin  
*/

alert("PROMEDIO DE EDADES DE 'N' CANTIDAD DE ALUMNOS \n CON LAS TRES ESTRUCTURAS DE CICLOS \n 1. CON WHILE")
var ene = prompt("Cuantos edades quieres promediar?")
contador = 1
sumap = 0
while(contador <= ene){
	var pr = prompt("Ingresa la edad")
	sumap = parseFloat(sumap) + parseFloat(pr)
	prome = parseFloat(sumap)/ parseFloat(ene)
	contador++
}
alert("El promedio de los datos que ingresaste es de: " + prome)

//-------------------------------------------------------------------
alert("PROMEDIO DE EDADES DE 'N' CANTIDAD DE ALUMNOS \n 2. CON DO-WHILE")
var x = prompt("Cuantos edades quieres promediar?")
y = 1
sumapr = 0
do{ 
	y++
	var ingresa = prompt("Ingresa la edad")
	sumapr = parseFloat(sumapr) + parseFloat(ingresa)
	promed = parseFloat(sumapr)/ parseFloat(x)
} 
while (y<=x)
alert("El promedio de los datos que ingresaste es de: " + promed)

//---------------------------------------------------------------------
alert("PROMEDIO DE EDADES DE 'N' CANTIDAD DE ALUMNOS \n 3. CON FOR")
var xa = prompt("Cuantos edades quieres promediar?")
sp = 0
for (var h=0; h<xa; h++){
	var califica = prompt("Ingresa la edad")
	sp = parseFloat(sp) + parseFloat(califica)
	promedio = parseFloat(sp)/ parseFloat(xa)
}
alert("El promedio de los datos que ingresaste es de: " + promedio )

/*.......................................
.........EJERCICIO CICLOS 5.............
.......................................*/


/*Pseudocodigo*/
/*	1. Inicio
	2. Escribir la descripcion del problema
	3. inicializar par = 0
	4. Hacer:
		4a. Inicializar yo=2
		4b. Realizar la operacion de par=par+yo
		4c. Escribir par
	5. Mientras par<100
		5a. Regresa a paso 4
	6. De lo contrario 
		6a. Escribir, que cansado es tecleear :D
*/

alert("En busca de los numeros pares en una numeracion del 0 al 100")
var par=0
do{
	var yo=2
	par = parseInt(par)+parseInt(yo)
	alert(par) 
}
while (par < 100)
	alert("SI YA SE QUE ES CANSADO PRESIONAR LA TECLA 50 VECES :D")