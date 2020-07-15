/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	
	var nombre;
	var edad;
	
	nombre = txtIdNombre.value;
	edad = txtIdEdad.value;
	
	/*1 Intento
	
	alert("Usted se llama " + nombre);
	alert("y tiene " + edad + " años");*/
	
	
	
	//2 Intento
	
	alert("Usted se llama "+nombre+" y tiene "+edad+" años");


	/*Errores
	No muestra los datos ingresados ;
	Creo que el error era estaba puesto ingresada por error en ves de ingresado;
	estar usando nombreIngresado=txtIdNombre.value ;
    y edadIngresado=txtIdedad.value ;
	Acorte el codigo como enseño el profesor intentare hacer eso en los anteriores y siguientes ejercicios
	
	
	*/
}

