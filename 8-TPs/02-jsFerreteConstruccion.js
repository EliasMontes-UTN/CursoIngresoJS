/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
  var largo;
  var ancho;
  var perimetro;
  var alambre;

  largo = parseInt(document.getElementById("txtIdLargo").value);
  ancho = parseInt(document.getElementById("txtIdAncho").value);
  perimetro = (ancho+largo)*2;
  alambre = perimetro * 3;

  alert("El area de su terreno es: "+perimetro+" metros, y se necesita esta cantidad de : "+alambre+" metros de alambre");

}
function Circulo () 
{
 var radio;
 var perimetro;
 var alambre;
 
 radio = parseInt(document.getElementById("txtIdRadio").value);
 perimetro= (2*Math.PI) *radio
 alambre = perimetro * 3;

 alert("La cantidad es : "+alambre+" metros de alambre");
    
}
function Materiales () 
{
  var largo;
  var ancho;
  var rectangular;
  var cemento;
  var cal;

  largo = parseInt(document.getElementById("txtIdLargo").value);
  ancho = parseInt(document.getElementById("txtIdAncho").value);
  rectangular = (ancho+largo)*2;
  cemento = rectangular*2;
  cal = rectangular*3;

  alert("Las bolsas necesarias de cemento son: "+cemento+" y la cantidad de cal necesaria es: "+cal);
}