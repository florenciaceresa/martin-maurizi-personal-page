//VALIDACIÓN FORMULARIO
const d = document;

document.addEventListener("DOMContentLoaded", contactFormValidations);

function contactFormValidations() {
    const $form = d.querySelector(".contact-form"),
    $inputs = d.querySelectorAll(".contact-form [required]");

    console.log($inputs);

    $inputs.forEach((input) => {
        const $span = d.createElement("span");
        $span.id = input.name;
        $span.textContent = input.title;
        $span.classList.add("contact-form-error", "none");
        input.insertAdjacentElement("afterend", $span);
    });

    d.addEventListener("keyup", (e) => {
        if (e.target.matches(".contact-form [required]")) {
            let $input = e.target,
            pattern = $input.pattern || $input.dataset.pattern;

            if (pattern) {
                console.log("El input tiene patrón");
                let regex = new RegExp(pattern);
                return !regex.exec($input.value)
                ? d.getElementById($input.name).classList.add("is-active")
                : d.getElementById($input.name).classList.remove("is-active");
            }
        }
    });

    //ENVÍO DE FORMULARIO
    d.addEventListener("submit", (e) => {
        e.preventDefault();

        const $response = d.querySelector(".contact-form-response");

        fetch("https://formsubmit.co/ajax/martinmaurizi@gmail.com", {
            method: "POST",
            body:new FormData(e.target)
        })
        .then(res => res.ok ? res.json() : Promise.reject(res))
        .then(json => {
            $response.classList.remove("none");
            $response.innerHTML = `<p>Los datos fueron enviados ¡Muchas gracias!</p>`;
            $form.reset();
        })
        .catch(err => {
            console.log(err);
            let message = err.statusText || "Ocurrió un error al enviar, intenta nuevamente";
            $response.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
        })
        .finally(() => setTimeout(() => {
            $response.classList.add("none");
            $response.innerHTML = "";
        }, 3000));  
});
}
