function llamarBoton(){ // ver por que funciona al 2do clic???
	var boton = document.getElementById("demo");
	boton.addEventListener("click", function(){
		alert("Hola mundo!");
	})
};

//FUNCION ONLOAD (en elemento body)

	function loading(){
		alert("Loading...");
	};

//FUNCION ONMOUSEOUT (en elemento input)

function sobre(){
	var sobre = document.getElementById("soyUnInput");
	sobre.addEventListener("onmouseout", function(){
		alert("Estas sobre mi");
	})
};




	

//FUNCION ONMOUSEOVER (en elemento input)


/*
PROBAR SI FUNCIONA DE ESTA MANERA

window.onload = function(){
		document.getElementById("demo").addEventListener("click", );
}
*/

