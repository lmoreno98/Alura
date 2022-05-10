import { valida } from "./validaciones.js"

const inputs = document.querySelectorAll("input");

inputs.addEventListener("blur", (input) => {
    valida(input.target);
})