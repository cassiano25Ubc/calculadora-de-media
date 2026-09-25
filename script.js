function calcularMedia(notas) {
    let soma = 0;

    for (const nota of notas) {
        soma += nota;
    }

    return soma / notas.length;
}

function classificarMedia(media) {
    if (media < 5) {
        return "Ruim";
    }

    if (media < 8) {
        return "Bom";
    }

    return "Ótimo";
}

const formulario = document.querySelector("#grade-form");
const camposNotas = document.querySelectorAll(".grade-field input");
const erroFormulario = document.querySelector("#form-error");
const resultadoMedia = document.querySelector("#result-average");
const resultadoStatus = document.querySelector("#result-status");

function aoEnviarFormulario(evento) {
    evento.preventDefault();
    erroFormulario.hidden = true;

    const notas = [];

    for (const campo of camposNotas) {
        if (campo.value === "" || !campo.validity.valid) {
            erroFormulario.textContent = "Preencha as três notas com valores entre 0 e 10.";
            erroFormulario.hidden = false;
            campo.focus();
            return;
        }

        notas.push(campo.valueAsNumber);
    }

    const media = calcularMedia(notas);

    resultadoMedia.textContent = media.toLocaleString("pt-BR", {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
    });
    resultadoStatus.textContent = classificarMedia(media);
}

formulario.addEventListener("submit", aoEnviarFormulario);