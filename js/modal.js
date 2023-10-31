//MODAL
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".modal-close");
const modalTitle = document.getElementById("modalTitle");
const modalParagraph = document.getElementById("modalParagraph");

// Función para abrir la ventana modal con datos personalizados
function openModal(title, paragraph, link) {
    // Reemplaza los saltos de línea (\n) con etiquetas <br> para crear saltos de línea en HTML
    const formattedParagraph = paragraph.replace(/\n/g, "<br>");
    modalTitle.textContent = title;

    // Agrega la etiqueta <strong> a todos los subtítulos para hacerlos en negrita
    const formattedSubtitle = formattedParagraph.replace(/(Evaluación Integral:|Técnicas manuales expertas:|Rehabilitación y prevención:|Alivio del dolor:|Mejora de la circulación:|Aceleración de la recuperación:|Fortalecimiento del sistema inmunológico:|Alivia el dolor:|Mejora la movilidad:|Bienestar general:|Evaluación funcional:|Planificación del entrenamiento:|Prevención de lesiones:|Orientación nutricional)/g, "<strong>$1</strong>");

    modalParagraph.innerHTML = formattedSubtitle;
    modal.classList.add("modal--show");
}
// Evento para abrir la ventana modal cuando se hace clic en el botón "open-project-1"
document.querySelector(".open-project-1").addEventListener("click", (e) => {
    e.preventDefault();
    openModal("TERAPIA MANUAL", "Ofrecemos un servicio de terapia manual altamente especializado y personalizado que tiene como objetivo mejorar su bienestar y calidad de vida. \n\n¿Qué puede esperar de nuestra terapia manual? \n\nEvaluación Integral: Cada tratamiento comienza con una evaluación detallada de su situación, teniendo en cuenta su historial médico, síntomas actuales y objetivos personales que permite crear un plan de tratamiento específico para usted. \n\nTécnicas manuales expertas: Utilizamos una variedad de técnicas manuales, como masajes terapéuticos, movilización articular, manipulación espinal y estiramientos diseñadas para reducir el dolor, mejorar la movilidad, restaurar el equilibrio y promover la recuperación. \n\nRehabilitación y prevención: Desempeñamos un papel importante en la rehabilitación después de lesiones y cirugías. Además, trabajamos en la prevención de lesiones al corregir desequilibrios y mejorar la biomecánica de su cuerpo.");
});

// Evento para abrir la ventana modal cuando se hace clic en el botón "open-project-2"
document.querySelector(".open-project-2").addEventListener("click", (e) => {
    e.preventDefault();
    openModal("MAGNETOTERAPIA", "Es una técnica no invasiva que utiliza campos magnéticos para estimular el proceso de curación natural de su cuerpo. Es una alternativa segura y efectiva para aliviar el dolor, reducir la inflamación y mejorar la función de los tejidos y las células. \n\nBeneficios terapéuticos: \n\nAlivio del dolor: Ayuda a reducir la inflamación y a relajar los músculos, lo que a menudo resulta en un alivio inmediato del dolor. \n\nMejora de la circulación: Estimula la circulación sanguínea, lo que a su vez promueve la entrega de oxígeno y nutrientes a las células y la eliminación de toxinas. \n\nAceleración de la recuperación: Acelera el proceso de recuperación en lesiones musculares y óseas ayudando a regenerar los tejidos dañados. \n\nFortalecimiento del sistema inmunológico: Puede aumentar la respuesta inmunológica de su cuerpo, lo que le ayuda a combatir infecciones y enfermedades.");
});

// Evento para abrir la ventana modal cuando se hace clic en el botón "open-project-3"
document.querySelector(".open-project-3").addEventListener("click", (e) => {
    e.preventDefault();
    openModal("PUNCIÓN SECA", "En nuestro centro de kinesiología, utilizamos la punción seca como un enfoque terapéutico altamente efectivo para el alivio del dolor y la recuperación muscular. \n\n¿Cómo funciona esta técnica? \n\nImplica el uso de agujas de acupuntura estériles para identificar y tratar las zonas de tensión en los músculos. Estas zonas pueden causar dolor referido y limitación de la movilidad. Se inserta suavemente la aguja en el punto gatillo, lo que provoca una respuesta de relajación y alivio en el músculo afectado. \n\nAlivia el dolor: Es especialmente efectiva para aliviar el dolor muscular y reducir la tensión en los músculos. \n\nMejora la movilidad: Ayuda a mejorar la flexibilidad y la amplitud de movimiento al liberar los músculos tensos.\n\nBienestar general: Contribuye a una sensación de bienestar y relajación, reduciendo la tensión muscular.");
});

// Evento para abrir la ventana modal cuando se hace clic en el botón "open-project-4"
// Evento para abrir la ventana modal cuando se hace clic en el botón "open-project-3"
document.querySelector(".open-project-4").addEventListener("click", (e) => {
    e.preventDefault();
    openModal("KINESIOLOGÍA DEPORTIVA", "Diseñamos servicios especializados para deportistas que desean alcanzar su máximo rendimiento y mantenerse en su mejor forma física. \n\n¿Qué incluye la kinesiología deportiva? \n\nEvaluación funcional: Realizamos una evaluación exhaustiva de su movilidad, fuerza y flexibilidad para identificar áreas de mejora y prevenir lesiones. \n\nPlanificación del entrenamiento: Creamos planes de entrenamiento personalizados que se adaptan a sus metas deportivas y necesidades específicas. \n\nPrevención de lesiones: Identificamos y abordamos desequilibrios musculares y debilidades para evitar lesiones. \n\nOrientación nutricional: Ofrecemos orientación nutricional para respaldar su dieta y maximizar su energía y resistencia.");
});


// Evento para cerrar la ventana modal cuando se hace clic en el botón de cierre
closeModal.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.remove("modal--show");
});

