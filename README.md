# leccion20-ej3
# Lección 20 / Ejercicio 3
- Desarrollar un script que lea la cantidad de segundos y el número inicial desde el HTML, luego, mostrar en el HTML 
un contador que incremente la cantidad de segundos desde el número inicial ingresado. 

# Solución
Declaramos 2 variables var seconds para los segundos y var inicio para iniciar el contador en número x. Luego aplicamos el 
método setInterval con una función anónima como parámetro, la cual mostrará el contador en el html de acuerdo a la cantidad
de segundos ingresados.

``` Javascript
window.addEventListener("load", function() {
	var boton = document.getElementById("try");
	boton.addEventListener("click", function() {
		var seconds = parseFloat(document.getElementById("seconds").value);
		var inicio = parseFloat(document.getElementById("inicio").value);
		setInterval(function(){
			document.getElementById("resultado").innerHTML = inicio++;
		}, seconds*1000);
	});
});
```
