//MODAL
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".modal-close");
const modalTitle = document.getElementById("modalTitle");
const modalParagraph = document.getElementById("modalParagraph");
const modalImg = document.getElementById("modalImg");

// Función para abrir la ventana modal con datos personalizados
function openModal(title, paragraph, imgSrc, link) {
    modalTitle.textContent = title;
    modalParagraph.textContent = paragraph;
    modalImg.src = imgSrc;

    modal.classList.add("modal--show");
}
// Evento para abrir la ventana modal cuando se hace clic en el botón "open-project-1"
document.querySelector(".open-project-1").addEventListener("click", (e) => {
    e.preventDefault();
    openModal("PROYECTO 1", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, repellat ipsa, ipsum iure dolores placeat temporibus architecto laboriosam, veniam est adipisci aliquid enim.", "assets/puncion-seca.jpg");
});

// Evento para abrir la ventana modal cuando se hace clic en el botón "open-project-2"
document.querySelector(".open-project-2").addEventListener("click", (e) => {
    e.preventDefault();
    openModal("PROYECTO 2", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, repellat ipsa, ipsum iure dolores placeat temporibus architecto laboriosam, veniam est adipisci aliquid enim.", "assets/puncion-seca.jpg");
});

// Evento para abrir la ventana modal cuando se hace clic en el botón "open-project-3"
document.querySelector(".open-project-3").addEventListener("click", (e) => {
    e.preventDefault();
    openModal("PROYECTO 3", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, repellat ipsa, ipsum iure dolores placeat temporibus architecto laboriosam, veniam est adipisci aliquid enim.", "assets/puncion-seca.jpg");
});

// Evento para cerrar la ventana modal cuando se hace clic en el botón de cierre
closeModal.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.remove("modal--show");
});

