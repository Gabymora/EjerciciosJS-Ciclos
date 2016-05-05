/*.......................................
.........EJERCICIOS CICLOS 6.............
.......................................*/

/*Pseudocodigo*/
/*	1. Inicio
	2. Escribir la descripcion del problema
	3. Leer a, b
	4. Inicializar co=1, a1=1, b1=1, expo=2
	5. Si a<=500 y b<=500 Entonces
		5a. Mientras co<=2
		
		5b. Realizar operacion de sum mas num en Sum
		5c. Realizar operacion de contador n+1 en n
	5. De lo contrario
		5a. Escribir sum
	6. Fin
*/
alert("TEOREMA DE PITAGORAS TRIANGULO RECTANGULO")
var a = prompt("Ingresa el valor del lado 'A'")
var b = prompt("Ingresa el valor del lado 'B'")
co=1
a1=1
b1=1
expo=2
if (a<500 && b<500){
	while(co<=2){
		var a1= (parseInt(a1)*parseInt(a))
		var b1= (parseInt(b1)*parseInt(b))
		var c1= (parseInt(a1) + parseInt(b1))
		var c2 = Math.pow(c1, 1/expo)
		co++
	}
	alert("La hipotenusa es = "+c2+ "cm")
}
else
	alert("Numeros Ingresados Incorrectos")

/*.......................................
.........EJERCICIOS CICLOS 7.............
.......................................*/

/*Pseudocodigo*/
/*	1. Inicio
	2. Escribir la descripcion del problema
	3. Leer numero
	4. Para i=0 , i<=10, i=i+1 Entonces
		4a. Realizar la operacion multi = numero * i
		4b. Escribir multi
	5. De lo contrario
		5a. Escribir Fin
	6. Fin
*/
alert("TABLAS DE MULTIPLICAR")
var numero = prompt("Que multiplicacion desear hacer?")

for (i=0; i<=10; i++){
	var multi = (parseInt(numero) * parseInt(i))
	alert(numero +" x "+ i + "=" + multi)
}
alert("Fin")


/*.......................................
.........EJERCICIOS CICLOS 8.............
.......................................*/

/*Pseudocodigo*/
/*	1. Inicio
	2. Escribir la descripcion del problema
	3. Leer Entero, exponente
	4. Inicializar expon=1, iex=1
	5. Mientras iex<=exponente
		5a. Realizar la operacion expon=expon*entero
		5b. Incrementar iex=iex+1
	6. De lo contrario
		6a. Escribe expon
*/
alert("NUMERO ENTERO ELEVADO A EXPONENETE")
var entero = prompt("Ingresa el numero entero")
var exponente = prompt ("Ingresa el valor del exponente")
var expon=1
var iex=1
while (iex<=exponente ){
	var expon = (parseInt(expon) * parseInt(entero))	
	iex++
}
alert("El resultado de " + entero +"^"+ exponente + "=" + expon)

	