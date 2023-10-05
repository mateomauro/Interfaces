"use strict"

// //traigo los botones 
// let izquierdaBTN = document.getElementById("izquierda");
// let derechaBTN = document.getElementById("derecha");

// //traigo el carrusel
// let carrusel = document.getElementById("carrusel");

// //175
// derechaBTN.addEventListener("click", () => {
//     carrusel.scrollLeft += 195;
// })
// izquierdaBTN.addEventListener("click", () => {
//     carrusel.scrollLeft -= 195;
// })

// let contenedor = document.querySelector('.contenedor-cards-recomendado');
// let indicadores = document.querySelectorAll('.indicador');

// contenedor.addEventListener('scroll', function () {
//     let scrollLeft = contenedor.scrollLeft;
//     let width = contenedor.scrollWidth;
//     let clientWidth = contenedor.clientWidth;
//     let scrollPercent = scrollLeft / (width - clientWidth);
//     let activeIndicatorIndex = Math.round(scrollPercent * (indicadores.length - 1));

//     indicadores.forEach((indicador, index) => {
//         if (index === activeIndicatorIndex) {
//             indicador.style.backgroundColor = 'blue'; // Cambia esto al color que quieras para el indicador activo
//         } else {
//             indicador.style.backgroundColor = '#bbb';
//         }
//     });
// });

// let cards = document.querySelectorAll('.card-recomendado');

// indicadores.forEach((indicador, index) => {
//     indicador.addEventListener('click', function () {
//         let cardWidth = cards[0].offsetWidth;
//         let cardMargin = parseFloat(window.getComputedStyle(cards[0]).marginRight);
//         let targetScroll = (cardWidth + cardMargin) * index;

//         contenedor.scrollLeft = targetScroll;
//     });
// });

// Paso 1: Obtén todos los carruseles en la página.
// Esto seleccionará todos los elementos con la clase "carruseles".
let carruseles = document.querySelectorAll(".carruseles");

// Paso 2: Define cuánto quieres que se mueva el carrusel con cada clic.
// Puedes ajustar este valor según tus necesidades.
let desplazamiento = 100;

// Paso 3: Agrega controladores de eventos a cada carrusel.
carruseles.forEach((carrusel) => {
    // Paso 4: Para cada carrusel, obtén los botones y el contenedor de las tarjetas.
    let btnDerecha = carrusel.querySelector(".flecha-derecha");
    let btnIzquierda = carrusel.querySelector(".flecha-izquierda");
    let contenedorCards = carrusel.querySelector(".contenedor-cards");

    // Paso 5: Agrega un controlador de eventos para el botón derecho.
    btnDerecha.addEventListener("click", () => {
        console.log("Botón derecho clickeado"); // Para depuración
        // Desplaza el contenedor de las tarjetas a la izquierda
        contenedorCards.scrollLeft += desplazamiento;
    });

    // Paso 6: Agrega un controlador de eventos para el botón izquierdo.
    btnIzquierda.addEventListener("click", () => {
        console.log("Botón izquierdo clickeado"); // Para depuración
        // Desplaza el contenedor de las tarjetas a la derecha
        contenedorCards.scrollLeft -= desplazamiento;
    });
});





