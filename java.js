window.onload = iniciar;
var ID = document.getElementById("idname");
var nombreFirst = document.getElementById("fname");
var nombreLast = document.getElementById("lname");
var email = document.getElementById("email");
var phone = document.getElementById("phone");

var error = document.getElementById("error");

function iniciar() {
    document.getElementById('boton').addEventListener('click', validar, false);
}
//Funciones validacion
function validaID() {

    if (ID.value == '' || ID.value == null) {
        alert("Falta su usuario. ");
        return false;
    }
    return true;

};
function validaNombre() {

    if (nombreFirst.value == '' || nombreFirst.value == null) {
        alert("Falta campo nombre o campo incorrecto. ");
        return false;
    }
    return true;

};

function validaApellido() {

    if (nombreLast.value == '' || nombreLast.value == null) {
        alert("Falta campo apellido o campo incorrecto. ");
        return false;
    }
    return true;

};

function validaEmail() {
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (emailRegex.test(email.value) != true) {
        alert("Email no valido")
        return false;
    }
    return true;
};


function validaPhone() {
    if (isNaN(phone.value) || phone.value == '') {
        alert("Telefono incorrecto. ");
        return false;
    }
    return true;

};

////Funcion que une el resto de funciones

function validar(e) {
    if (validaID() && validaNombre() && validaApellido() && validaEmail() && validaPhone() && confirm('Desea enviar el formulario?')) {
        return true;
    } else {
        e.preventDefault();
        return false;
    }
};