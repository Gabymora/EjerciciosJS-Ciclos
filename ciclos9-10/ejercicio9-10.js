/*.......................................
.........EJERCICIOS CICLOS 9.............
.......................................*/

/*Pseudocodigo*/
/*	1. Inicio
	2. Escribir la descripcion del problema
	3. Inicializar el arreglo con la 40 calificaciones y med= 0.0
	4. Para i=0, i<tamaño del arreglo, i=i+1 hacer.
		4a. Realizar la operacion med = med + contenido individual del arreglo.
	5. De lo contrario
		5a. Realizar la operacion med= med/tamaño del arreglo
		5b. Escribir med
		5c. El contenido del arreglo ordenarlo de menor a mayar con una funcion
		5d. Escribir la posicion 0 del arreglo (menor) y la posicion 39 (mayor)
	6. Escribir la descripcion del problema
	7. inicializar media=0.0, suma=0 
	8. Escribir en Array los datos a ingresar
	9. Crear el arreglo notas con los datos de array
	10. Para i=0, i<array, i=i+1 hacer.
		10a. Escribir las calificaciones dentro del arreglo Notas
		10b. Realizar la operacion de suma= suma + Contenido del arreglo notas
		10c. Realizar la operacion de media= suma / array
	11. De lo contrario 
		11a. Escribir media
		11b. El contenido del arreglo-Notas ordenarlo de menor a mayar con una funcion
		11c. Escribir el valor de la posicion 0 del arreglo (menor)
	12. Fin
*/

/*alert("PROMEDIO DE 40 ALUMNOS Y PROMEDIO MENOR \n Donde todos los datos ya estan dados")
var arrays = [10, 7, 10, 4, 8, 7, 9, 8, 9, 10, 7, 8, 9, 10, 9, 3, 6, 5, 9, 8, 7, 10, 10, 4, 2, 9, 7, 6, 5, 3, 4, 8, 7, 8, 9, 10, 1, 9, 8, 10];
var med= 0.0;
for (i = 0; i < arrays.length; i++) 
	{
  	med = med + arrays[i];
	}

med = med / arrays.length;
alert("El promedio de los 40 datos es: " + med)
arrays.sort(function(a, b) {
  return b - a
});
alert(arrays[0] + " Es la mayor calificacion y " + arrays[39] + " Es la menor calificacion")

//------------------------------------------------------------------------

alert("PROMEDIO DE 40 ALUMNOS Y PROMEDIO MENOR \n 'Donde todos los datos los ingresa el usuario'")
var media=0.0;
var suma=0;
var array=parseInt(prompt("Cuantos datos deseas ingresar?: "));
notas = new Array (array);

for (i=0; i<array; i++)
    {
    notas[i]=parseFloat(prompt("Digite la calificacion: "));
    suma = suma + (notas[i]);
    media = suma / array
    }

alert("El promedio de los datos ingresados es de: " + media);
notas.sort(function(a,b) {return a-b});
alert(notas[0] + " es la nota de menor calificacion, \n de los datos ingresados" )*/


/*.......................................
.........EJERCICIOS CICLOS 10.............
.......................................*/

/*Pseudocodigo*/
/*	1. Inicio
	2. Escribir la descripcion del problema
	3. Leer numero
	4. Leer Pot
	5. Si pot==3
		5a. Para i=0, i<=pot, i=i+1
			5aa. Hacer la operacion rpta=numero^pot
	6. De lo contrario Si pot==4
		6a. Para i=0, i<=pot, i=i+1
			6aa. Hacer la operacion rpta=numero^pot
	7. 
*/


alert("TERCERA Y CUARTA DE 10 NUMEROS INGRESADOS POR EL USUARIO")
var pot3 = 3.0;
var pot4 = 4.0;
var rpta = 0.0;
for (var a = 1; a <= 10; a++) {
  var numero = parseFloat(prompt("Ingresa el numero " + a + ": "))
  rpta = Math.pow(numero, pot3)
  alert(numero + "^3= " + rpta)
  rpta = Math.pow(numero, pot4)
  alert(numero + "^4=" + rpta)
}
