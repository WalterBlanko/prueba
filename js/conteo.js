'use strict'
var botonElement1 = document.querySelector("#btnAgregar1");
var botonElement2 = document.querySelector("#btnAgregar2");
var botonElement3 = document.querySelector("#btnAgregar3");
var botonElement4 = document.querySelector("#btnAgregar4");
var botonElement5 = document.querySelector("#btnAgregar5");
var botonElement6 = document.querySelector("#btnAgregar6");
var pElement = document.getElementById("areaContador");
var contador = 0;
botonElement1.onclick = function () {
    contador++;
    pElement.textContent = contador;
}
botonElement2.onclick = function () {
    contador++;
    pElement.textContent = contador;
}
botonElement3.onclick = function () {
    contador++;
    pElement.textContent = contador;
}
botonElement4.onclick = function () {
    contador++;
    pElement.textContent = contador;
}
botonElement5.onclick = function () {
    contador++;
    pElement.textContent = contador;
}
botonElement6.onclick = function () {
    contador++;
    pElement.textContent = contador;
}