export function cargarTareas() {
    const tareasContainer = document.createElement('div');
    tareasContainer.className = 'tareas-container';

    const tareas = [
        "Drink 8 glasses of water",
        "Meditate for 10 minutes",
        "Read a chapter of a book",
        "Go for a 30-minute walk",
        "Write in a gratitude journal",
        "Plan meals for the day",
        "Practice deep breathing exercises",
        "Stretch for 15 minutes",
        "Limit screen time before bed"
    ];

    tareas.forEach(tarea => {
        const tareaElement = document.createElement('div');
        tareaElement.className = 'tarea';
        tareaElement.textContent = tarea;
        tareasContainer.appendChild(tareaElement);
    });

    return tareasContainer;
}