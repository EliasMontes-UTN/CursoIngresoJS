/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precio1;
    var precio2;
    var precio3;
    var suma;

    precio1 = parseInt(document.getElementById("txtIdPrecio1").value);

    precio2 = parseInt(document.getElementById("txtIdPrecio2").value);

    precio3 = parseInt(document.getElementById("txtIdPrecio3").value);

    suma = precio1+precio2+precio3;

    alert(suma);
    
}
function Promedio () 
{
    var precio1;
    var precio2;
    var precio3;
    var promedio;

    precio1 = parseInt(document.getElementById("txtIdPrecio1").value);

    precio2 = parseInt(document.getElementById("txtIdPrecio2").value);

    precio3 = parseInt(document.getElementById("txtIdPrecio3").value);

    promedio = (precio1+precio2+precio3) / 3 ;

    alert(promedio);
}
function PrecioFinal () 
{
    var precio1;
    var precio2;
    var precio3;
    var preciofinal;

    precio1 = parseInt(document.getElementById("txtIdPrecio1").value);

    precio2 = parseInt(document.getElementById("txtIdPrecio2").value);

    precio3 = parseInt(document.getElementById("txtIdPrecio3").value);

    preciofinal = (precio1+precio2+precio3) * 1.21;

    alert(preciofinal);
}