"Use strict"

//PARTE DE ENCONDER REGISTRO Y FORMULARIO JS
let contenedorRegistro = document.querySelector(".contenedor-registro");
let contenedorLogin = document.querySelector(".contenedor-login");
let btnLogin = document.querySelector(".login");
let btnRegistro = document.querySelector(".inicio-sesion");
let contenedor = document.querySelector(".contenedor");

contenedorRegistro.classList.remove("ocultar");

btnRegistro.addEventListener("click", () => {
    contenedorRegistro.classList.add("ocultar");
    contenedorLogin.classList.remove("ocultar");
    contenedor.classList.add("login-grid");
})

btnLogin.addEventListener("click", () => {
    contenedorLogin.classList.add("ocultar");
    contenedorRegistro.classList.remove("ocultar");
    contenedor.classList.remove("login-grid");

})

let btnForm = document.querySelector(".btn-logueado");