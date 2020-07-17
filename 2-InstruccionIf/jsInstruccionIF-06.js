function mostrar()
{
	//tomo la edad  
	var edad;

	edad = txtIdEdad.value;
	
	if(edad>=18)
    {
  
        alert("Usted es mayor de edad");
 	
	}
 
	if(edad >= 13 && edad <= 17)
    {

		alert("Usted es adolecente");

	}

	if(edad<=12)
	{
	
		alert("Usted es menor de edad");

	}	



}//FIN DE LA FUNCIÓN