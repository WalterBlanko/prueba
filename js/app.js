'use strict'
function validar() {
    var campo = document.querySelector('#campo');
    var nombre = document.querySelector('#txtNombre').value;
    var email = document.querySelector('#txtEmail').value;
    var rut = document.querySelector('#rRut').value;
    var pasaporte = document.querySelector('#rPasaporte').value;
    var documento = document.querySelector('#txtDocumento').value;
    var ciudad = document.querySelector('#txtCiudad'.value);
    var mensaje = document.querySelector('#txtMensaje').value;

    if(nombre.length == 0 || email.length == 0 || rut.length == 0 || pasaporte == 0 || documento.length == isNaN || ciudad.length == 0 || mensaje.length == 0) {
        campo.style.display = 'block';
        return false;
    }  else {
        campo.style.display = 'none';
    }
}

window.addEventListener('load', () => {
    var campo = document.querySelector('#campo');
    campo.style.display = 'none';
})
