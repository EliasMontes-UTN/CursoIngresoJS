/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	
	var nombreingresado;
	var edadingresado;
	
	nombreingresado=document.getElementById("txtIdNombre").value ;
	edadingresado=document.getElementById("txtIdEdad").value ;
	
	/*1 Intento
	
	alert("Usted se llama " + edadingresada);
	alert("y tiene " + edadingresada + " años");*/
	
	
	
	//2 Intento
	
	alert("Usted se llama "+nombreingresado+" y tiene "+edadingresado+" años");


	/*Errores
	No muestra los datos ingresados
	Creo que el error era estaba puesto ingresada por error en ves de ingresado
	
	
	
	*/
}

