/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
   var fahrenheit;
   var centígrados;

   fahrenheit = parseInt(document.getElementById("txtIdTemperatura").value);
   centígrados = (fahrenheit - 32) * 5/9;
   centígrados = parseInt(centígrados);

   alert(fahrenheit+" grados farenheit son "+centígrados+" grados centigrados");
}

function CentigradosFahrenheit () 
{
   var centigrados;
   var fahrenheit;

   centigrados = parseInt(document.getElementById("txtIdTemperatura").value);
   fahrenheit = (centigrados *5/9) +32;
   fahrenheit = parseInt(fahrenheit);

   alert(centigrados+" grados centigrados son "+fahrenheit+" grados fahrenheit");

}
