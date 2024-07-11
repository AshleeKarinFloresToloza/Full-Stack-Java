/* var botonIniciarSesion = document.getElementById("botoninicio");
console.log(botonIniciarSesion)

botonIniciarSesion.addEventListener("click", function(){
    this.innerText="Cerrar sesión";
}) */

var botonIniciarSesion = document.getElementById("botoninicio");
botonIniciarSesion.addEventListener("click", function() {
    if (this.innerText === "Iniciar sesión") {
        this.innerText = "Cerrar sesión";
        this.style.backgroundColor = "blue";
    } else {
        this.innerText = "Iniciar sesión";
        this.style.backgroundColor = "#1e90ff";
    }
});

var botonMegusta = document.getElementById("likegato");
var contador=0

botonMegusta.addEventListener("click", function(){
    contador++;
    this.innerText= contador + " me gusta";
    alert("Gato Atigrado was liked")
}); 

var botonMegusta = document.getElementById("likeperro");
var contador=0

botonMegusta.addEventListener("click", function(){
    contador++;
    this.innerText= contador + " me gusta" ;
    alert("Golden Retriever was liked")
}); 

var botonAgregarDefinicion = document.getElementById("agregar");
botonAgregarDefinicion.addEventListener("click", function() {
    this.style.display = "none";
});
