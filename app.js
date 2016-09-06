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