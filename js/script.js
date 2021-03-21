let botonInicioSesion = document.getElementById("btn");
let btnVender = document.getElementById("btnVender");
let btnCerrarNegocio = document.getElementById("cerrarNegocio");

//variables
let nivelExistencias = 0;
let nivelSuministros = 0;
let estado = null;
let usuario = "";

function nombreUsuario(u) {
    let usr = document.getElementById('txtUsuario');
    usr.innerHTML = u;
}

//cambiar el color del boton
if (nivelExistencias > 0) {
    btnVender.style.backgroundColor = "#008000";
}

if (window.location.href === "http://127.0.0.1:5500/index.html") {
    botonInicioSesion.addEventListener("click", () => {
        let nameField = document.getElementById("usuario").value;
        let passField = document.getElementById("password").value;
        if (passField != "" && nameField != "") {
            usuario = nameField;
            location.href = "main.html";
        }
    });
}

if(window.location.href === "http://127.0.0.1:5500/main.html"){
    btnCerrarNegocio.addEventListener("click", ()=>{
        location.href = "index.html";
    });
}

