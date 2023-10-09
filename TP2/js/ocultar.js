"use strict"

//traigo los contenedores de los menu
let menuPrincipal = document.querySelector(".menu-desplegado");
let menuPerfil = document.querySelector(".mi-perfil-desplegado");
let carrito = document.querySelector(".seccion-carrito");

//traigo los botones
let btnMenuPrincipal = document.getElementById("btnMenuPrincipal");
let btnCarrito = document.getElementById("btnCarrito");
let btnPerfil = document.getElementById("btnPerfil");
let btnCruzCarrito = document.getElementById("btnCruzCarrito");
let btnCruzPerfil = document.getElementById("btnCruzPerfil");

//cuando clikean que aparesca el menu principal
btnMenuPrincipal.addEventListener("click", () => {
    menuPrincipal.classList.remove("ocultar")
})

//cuando el mouse sale que se oculte
menuPrincipal.addEventListener("mouseleave", () => {
    menuPrincipal.classList.add("ocultar");
});

//cuando clickea el carrito 
btnCarrito.addEventListener("click", () => {
    carrito.classList.remove("ocultar")
})

//cierre el carrito cuando le da a la cruz
btnCruzCarrito.addEventListener("click", () => {
    carrito.classList.add("ocultar");
})

//cuando clicke el perfil
btnPerfil.addEventListener("click", () => {
    menuPerfil.classList.remove("ocultar")
})

//cierre el perfil cuando le da a la cruz
btnCruzPerfil.addEventListener("click", () => {
    menuPerfil.classList.add("ocultar");
})



//OCULTO LA NAVEGACION

let contador = 0;
let tiempo = 5000 / 100;
let contenedorHome = document.querySelector(".contenedor");
let contenedorLoader = document.querySelector(".contenedor-loading");
let incrementador = document.querySelector(".contador");

let temporizador = setInterval(() => {
    if (contador <= 100) {
        incrementador.innerHTML = contador + "%"
        contador++;
    }
    else {
        contenedorHome.classList.remove("ocultar");
        contenedorLoader.classList.add("ocultar");
        clearInterval(temporizador)//Limpio en consola
        console.log("hola")
    }

}, tiempo)
