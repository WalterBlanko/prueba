'use strict'

function validar1() {
    var InputEmail = document.querySelector('#inputEmail').value;
    var mensaje = document.querySelector('#txtarea').value;

    if(InputEmail.length == 0 || mensaje.length == 0){
        campo.style.display = 'block';
        return false;
    } else {
        campo.style.display = 'none';
    }   
}

window.addEventListener('load', () => {
    var campo = document.querySelector('#campo');
    campo.style.display = 'none';
});