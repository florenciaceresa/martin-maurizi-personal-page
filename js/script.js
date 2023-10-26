//Barra de navegación visible al hacer scroll
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY>0);
})


//Menú hamburguesa al hacer scroll
// Función para cambiar el color de las barras
function changeBarColor(scrollPosition) {
    const bars = document.querySelectorAll(".burger-button");

    if (scrollPosition > 100) {
        bars.forEach(bar => {
            bar.style.color = "#808080";
        });
    } else {
        bars.forEach(bar => {
            bar.style.color = "#ffffff";
        });
    }
}

// Evento de scroll para cambiar el color de las barras
window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    changeBarColor(scrollPosition);
});



// Evento de clic en el botón hamburguesa
const menuToggle = document.getElementById('menu-toggle');
const items = document.querySelector('#menu .items');
const burgerButton = document.querySelector('.burger-button');
const closeButton = document.querySelector('.close-button');

menuToggle.addEventListener('click', function() {
    if (items.style.display === 'block') {
        items.style.display = 'none';
    } else {
        items.style.display = 'block';
    }

    // Cambiar el icono de hamburguesa a cruz y viceversa
    burgerButton.classList.toggle('active');
    closeButton.classList.toggle('active');

    // Ocultar el botón de hamburguesa si el menú .items está activo
    if (items.style.display === 'block') {
        burgerButton.style.display = 'none';
    } else {
        burgerButton.style.display = 'block';
    }

});





