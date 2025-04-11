export function cargarFormulario() {
    const formularioContainer = document.createElement('div');
    formularioContainer.className = 'formulario-container';

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Write a task...';
    input.className = 'tarea-input';

    const addButton = document.createElement('button');
    addButton.textContent = 'Add';
    addButton.className = 'add-button';

    formularioContainer.appendChild(input);
    formularioContainer.appendChild(addButton);
    
    
    addButton.addEventListener('click', () => {
        if (input.value.trim()) {
            alert(`Tarea agregada: ${input.value}`);
            input.value = '';
        }
    });

    return formularioContainer;
}