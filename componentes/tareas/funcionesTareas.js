export function activarEventosTareas() {
    const tareas = document.querySelectorAll('.tarea');

    tareas.forEach(tarea => {
        tarea.addEventListener('click', () => {
            tarea.classList.toggle('completada'); 
        });
    });
}
