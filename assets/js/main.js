function llamarBoton(){ 
	var boton = document.getElementById("demo");
	boton.addEventListener("click", function(){
		alert("Hola mundo!");
	})
};


//FUNCION ONLOAD (en elemento body)

	function loading(){
		alert("Loading...");
	};

/*
PROBAR SI FUNCIONA DE ESTA MANERA

window.onload = function(){
		document.getElementById("demo").addEventListener("onload", );
}
*/

//FUNCION ONMOUSEOVER (en elemento input)

function sobre(){
	var sobre = document.getElementById("unInput");
	sobre.addEventListener("mouseover", function(){
		alert("Estas sobre mi");
	})
};



//FUNCION ONMOUSEOUT (en elemento input)

	function fuera(){
	var fuera= document.getElementById("unInput");
	fuera.addEventListener("mouseout", function(){
		alert("No estas sobre mi");
	})
};







