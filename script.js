let texto = document.getElementById("texto");
let nuevoTexto = document.getElementById("textoNuevo");
let btnCopiar = document.getElementById("copiar");

function validarTexto(info) {
    //Expresiones regulares
    let letrasMayusculas = new RegExp(/[A-Z]/g);
    let caracteresEspeciales = new RegExp(/(?=.*?[#?!@$%^&*-])/);
    let acentos = new RegExp(/[á-ú]|[Á-Ú]/g);
    if (info === "") {
        //Validar campo vacío
        swal("Error", "Ingrese algún texto por favor", "warning");
        return false;
    } else if (info.match(letrasMayusculas)) {
        //Validar letras mayúsculas
        swal("Error", "Debe ser texto en minúsculas", "warning");
        return false;
    } else if (info.match(caracteresEspeciales)) {
        //Validar caracteres especiales
        swal("Error", "Debe ser texto sin caracteres especiales", "warning");
        return false;
    } else if (info.match(acentos)) {
        //Validar acentos tanto en mayúsculas como en minúsculas
        swal("Error", "Debe ser texto sin acentos", "warning");
        return false;
    } else {
        swal("Exitoso", "Texto correcto", "success");
        return true;
    }
}

function quitarImagenParrafos() {
    document.getElementById("imagenParrafos").style.display = "none";
    nuevoTexto.style.height = "60%";
    btnCopiar.removeAttribute("hidden");
    btnCopiar.textContent = "Copiar";
    return;
}

//Para botón de encriptar
function encriptar() {
    let valorTexto = texto.value;
    //Validar si el campo está vacío
    if (validarTexto(valorTexto)) {
        let info = texto.value.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
        //Añade las letras encriptadas en el campo de la izquierda
        document.getElementById("textoNuevo").innerHTML = info;
        //Se vacía el campo de la derecha
        texto.value = "";
        quitarImagenParrafos();
    }
    return;
}

//Para botón de desencriptar
function desencriptar() {
    let valorTexto = texto.value;
    //Validar si el campo está vacío
    if (validarTexto(valorTexto) === true) {
        let info = texto.value.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
        //Añade las letras desencriptadas en el campo de la izquierda
        document.getElementById("textoNuevo").innerHTML = info;
        //Se vacía el campo de la derecha
        texto.value = "";
        quitarImagenParrafos();
    }
    return;
}

//Para botón de copiar
btnCopiar.addEventListener("click", (e) => {
    navigator.clipboard.writeText(nuevoTexto.textContent);
    btnCopiar.textContent = "Copiado";
});