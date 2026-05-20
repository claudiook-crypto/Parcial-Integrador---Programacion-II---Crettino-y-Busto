alert("Bienvenido a la Tienda Gamer");

let colorOscuro = true;

function cambiarColor() {
if (colorOscuro) {
document.body.style.backgroundColor = "#444";
} else {
document.body.style.backgroundColor = "#111";
}
colorOscuro = !colorOscuro;

console.log("Color cambiado");
}

function mostrarMensaje() {
alert("Nuevos productos disponibles!");
}
