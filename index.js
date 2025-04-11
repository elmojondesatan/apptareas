import { cargarHeader } from "./componentes/header/header.js";
import { cargarTareas } from "./componentes/tareas/tareas.js";
import { cargarFormulario } from "./componentes/formularios/formularios.js";
import { activarEventosTareas } from "./componentes/tareas/funcionesTareas.js";

function cargarDOM() {
    let DOM = document.querySelector("#root");
    DOM.className = "DOM";

    DOM.appendChild(cargarHeader());
    DOM.appendChild(cargarTareas());
    DOM.appendChild(cargarFormulario());
    DOM.appendChild(activarEventosTareas());

    return DOM;
}

cargarDOM()