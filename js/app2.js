function validar1() {
    var campo = document.querySelector('#campo');
    var correo = document.querySelector('#txtCorreo').value;
    var pass = document.querySelector('#txtPass').value;

    if(correo.length == 0 || pass.length == 0) {
        campo.style.display = 'block';
        return false;
    } else {
        campo.style.display = 'none';
    }
};

function validar2() {
    var nombre = document.querySelector('#txtNombre').value;
    var email = document.querySelector('#txtEmail').value;
    var region = document.querySelector('#regiones').value;
    var provincia = document.querySelector('#provincia').value;
    var pass = document.querySelector('#txtContra').value;
    var campo2 = document.querySelector('#campo2');

    if(nombre.length == 0 || email.length == 0 || region.length == 0 || provincia.length == 0 || pass.length == 0) {
        campo2.style.display = 'block';
        return false;
    } else {
        campo2.style.display = 'none';
    }
}

function validar3() {
    var InputEmail = document.querySelector('#inputEmail').value;
    var mensaje = document.querySelector('#txtarea').value;

    if(InputEmail.length == 0 || mensaje.length == 0){
        campo3.style.display = 'block';
        return false;
    } else {
        campo3.style.display = 'none';
    }   
}

window.addEventListener('load', () => {
    var campo = document.querySelector('#campo');
    var campo2 = document.querySelector('#campo2');
    var campo3 = document.querySelector('#campo3');
    campo.style.display = 'none';
    campo2.style.display = 'none';
    campo3.style.display = 'none';
});
