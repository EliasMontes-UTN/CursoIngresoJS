/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	
	/*1° Intento
	var nombreIngresado;
	nombreIngresado=txtIdNombre.value;
	alert("Su nombre es: "+nombreIngresado);*/
      
	 //2° Intento
	 var nombreIngresado;
	nombreIngresado = document.getElementById("txtIdNombre").value;
	alert("Su Nombre es :"+nombreIngresado);

	/*Errores
	 [object HTMLInputElement] solucion .value


	*/
}


