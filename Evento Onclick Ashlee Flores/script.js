/*botonIniciarSesion.addEventListener("click", function(){
    console.log("Funciona")
    botonIniciarSesion.innerText="Cerrar sesión";
})
var botonIniciarSesion = document.getElementById("botoninicio");
console.log(botonIniciarSesion.innerHTML) */
/*
var botonMegusta = document.getElementById("likegato");
var contador=0

botonMegusta.addEventListener("click", function(){
    contador++;
    this.innerText="Me gusta "+contador;
    alert("Gato")
}); */

function likegato(){
    console.log("da like gato")
    botonMegusta.innerText="Me gusta"+contador;
}

var botonMegusta = document.getElementById("likegato");
console.log(botonMegusta.innerHTML)
botonMegusta.addEventListener("click", likegato)


function login(){
    console.log("Funciona")
    botonIniciarSesion.innerText="Cerrar sesión";
}

var botonIniciarSesion = document.getElementById("botoninicio");
console.log(botonIniciarSesion.innerHTML)
botonIniciarSesion.addEventListener("click", login)