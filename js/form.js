function validar() {
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var telefono = document.getElementById("telefono").value;
    var fecha = document.getElementById("fecha").value;
    var contrasena = document.getElementById("contrasena").value;
    var placa = document.getElementById("placa").value;
    var expresion_correo = /\w+@\w+\.+[a-z]/;
    var expresion_placa = /[A-Z]+\-+\d{3}/;
    var x = new Date();
    var day = x.getDate();
    var month;
    if (month < 10) {
        month = "0" + (x.getMonth()+1);
    }else{
        month = x.getMonth()+1;
    }
    var year = x.getFullYear();
    var fechaFinal = day.toString() + "/" + month.toString() + "/" + year.toString();

    if (nombre === "" || correo === "" || telefono === "" || fecha === "" || contrasena === "" || placa === "") {
        alert("Por Favor llene completamente el formulario");
        return false;
    } else if (nombre.length > 30) {
        alert("El nombre ingresado es muy largo");
        return false;
    } else if (correo.length > 50) {
        alert("El correo ingresado es muy largo");
        return false;
    } else if (!expresion_correo.test(correo)) {
        alert("El correo ingresado no es valido");
        return false;
    } else if (telefono.length > 10 || telefono.length < 7) {
        alert("El telefono ingresado no es valido");
        return false;
    } else if (isNaN(telefono)) {
        alert("El telefono ingresado no es un número");
        return false;
    } else if (fecha.length !== 10 || (fecha.substring(2, 3) !== "/") || (fecha.substring(5, 6) !== "/")) {
        alert("Error, la fecha ingresada debe estar en el formato dd/mm/aaaa");
        return false;
    } else if ((fecha.substring(0, 2) > 31)) {
        alert("Error, la dia ingresado es invalido\n El dia debe ser inferior a 31");
        return false;
    } else if (fecha.substring(3, 5) > 12) {
        alert("Error, el mes ingresado es invalido\n El mes debe ser inferior a 12");
        return false;
    } else if (validate_fechaMayorQue(fecha, fechaFinal) === 0) {
        alert("Error, La fecha debe ser inferior a la actual");
        return false;
    } else if (contrasena.length > 15 || contrasena.length < 8) {
        alert("La contrasena ingresada no cumple con los requisitos");
        return false;
    } else if (placa.length > 7) {
        alert("La placa ingresada es muy larga");
        return false;
    } else if (!expresion_placa.test(placa)) {
        alert("La placa ingresada no es valida debe estar en el formato AAA-000");
        return false;
    }
}

function mayus(e) {
    var tecla = e.value;
    var tecla2 = tecla.toUpperCase();
    e.value = e.value.toUpperCase();
    return tecla2;
}

function solo_letras(e) {
    key = e.keyCode || e.which;
    teclado = String.fromCharCode(key).toLowerCase();
    letras = " abcdefghijklmnñopqrstuvwxyz";
    especiales = "8-37-38-46-164"; //8 es \ 37 flecha derecha 38 flecha izquierda 46 suprimir 164 es ñ
    teclado_especial = false;
    for (var i in especiales) {
        if (key === especiales[i]) {
            teclado_especial = true;
            break;
        }
    }
    if (letras.indexOf(teclado) === -1 && !teclado_especial) { //Si lo que sea capturado en el teclado en letras es igual a -1
        return false;
    }

}

function valida_ntel(e) {
    var tecla = (document.all) ? e.keyCode : e.which;
    //Tecla de retroceso para borrar, siempre la permite
    if (tecla === 8) {
        return true;
    }
    // Patron de entrada, en este caso solo acepta numeros                            
    var patron = /[0-9]/;
    var tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}

var getData = function () {
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var telefono = document.getElementById("telefono").value;
    var fecha = document.getElementById("fecha").value;
    var contrasena = document.getElementById("contrasena").value;
    var placa = document.getElementById("placa").value;
    if (nombre !== "" && correo !== "" && telefono !== "" && fecha !== "" && contrasena !== "" && placa !== "") {
        console.log(nombre + " " + correo + " " + telefono + " " + fecha + " " + placa);
    }
};

var getDataLogin = (function () {
    var correo = document.getElementById("correo_login").value;
    var contrasena = document.getElementById("contrasena_login").value;
    if (correo !== "" && contrasena !== "") {
        console.log(correo + " " + contrasena);
    }
});

function validate_fechaMayorQue(fechaInicial, fechaFinal) {
    valuesStart = fechaInicial.split("/");
    valuesEnd = fechaFinal.split("/");
// Verificamos que la fecha no sea posterior a la actual
    var dateStart = new Date(valuesStart[2], (valuesStart[1] - 1), valuesStart[0]);
    var dateEnd = new Date(valuesEnd[2], (valuesEnd[1] - 1), valuesEnd[0]);
    if (dateStart >= dateEnd) {
        return 0;
    }
    return 1;
}