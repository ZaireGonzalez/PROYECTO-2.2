document.getElementById("registroForm").addEventListener("submit", function(e) {
    e.preventDefault();
    document.querySelector(".form-container").style.display = "none";
    document.getElementById("menu").style.display = "block";
});

function abrirModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function cerrarModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

function cerrarSesion() {
    document.getElementById("menu").style.display = "none";
    document.querySelector(".form-container").style.display = "block";
}

function volverMenu(modalId) {
    cerrarModal(modalId);
    document.getElementById("menu").style.display = "block";
}
