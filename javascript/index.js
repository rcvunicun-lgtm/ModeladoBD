// const contenedor = document.getElementById('contenedor');
// const elemento = document.getElementById('elemento');

// let isDragging = false;
// let startX, scrollLeft;

// contenedor.addEventListener('mousedown', (e) => {
//     isDragging = true;
//     startX = e.pageX - contenedor.offsetLeft;
//     scrollLeft = contenedor.scrollLeft;
// });

// contenedor.addEventListener('mouseleave', () => {
//     isDragging = false;
// });

// contenedor.addEventListener('mouseup', () => {
//     isDragging = false;
// });

// contenedor.addEventListener('mousemove', (e) => {
//     if (!isDragging) return;
//     e.preventDefault();
//     const x = e.pageX - contenedor.offsetLeft;
//     const walk = (x - startX) * 1;
//     contenedor.scrollLeft = scrollLeft - walk;
// });

// elemento.addEventListener('click', (e) => {
//   contenedor.stopPropagation(); // Evita que el clic en el elemento se propague al contenedor
// });

// document.getElementById('btn-menu').addEventListener('change', function() {
//     var elements =  document.querySelectorAll('#contenido-temario li a');

//     for(let i = 0; i < elements.length; ++i){
//         if(elements[i].style.backgroundColor != 'red'){
//             elements[i].style.backgroundColor = "red";
//         }else{
//             elements[i].style.backgroundColor = "yellow";
//         }
//     }
// });

let encabezado;
let menuNav;

let altoEncabezado;
let altoMenuNav;

let contenidoTemario;
let botonMenu;

encabezado = document.getElementsByTagName('header')[0];
menuNav = document.getElementsByTagName('nav')[0];

actualizarPosPresentacion();
window.addEventListener('resize', function () {
    actualizarPosPresentacion();
});

function actualizarPosPresentacion() {
    altoEncabezado = parseFloat(window.getComputedStyle(encabezado).getPropertyValue('height'));
    menuNav.style.top = `${altoEncabezado}px`;

    altoMenuNav = parseFloat(window.getComputedStyle(menuNav).getPropertyValue('height'));

    contenidoTemario = document.getElementById("contenido-temario");
    contenidoTemario.style.height = `calc(100vh - ${altoEncabezado}px - ${altoMenuNav}px)`;
}

//----------------------------------------------------------------------------------------------------- 

botonMenu = document.getElementById("boton-menu");
botonMenu.addEventListener('click', function (event) {
    if (this.checked) {
        contenidoTemario.style.zIndex = "1";
    } else {
        contenidoTemario.style.zIndex = "-1";
    }
});
