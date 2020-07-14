/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//1°Intento
	var nombre;
	nombre=prompt("Ingresa tu nombre", "Natalia Natalia") ;
	txtIdNombre .value=nombre

    //2° Intento
    var nombre;
    nombre=document.getElementById("txtIdNombre").value ;
    alert("Su Nombre es :"+nombre);




}

