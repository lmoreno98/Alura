(() => {
    // Funciones anonimas con =>
    const createTask = (evento) => {
        // Hago que cuando clique el formulario no se reinicie la pantalla
        evento.preventDefault();


        // Capturo el valor de un input
        const input = document.querySelector(".inputForm");
        const value = input.value;
        const list = document.querySelector(".cardsList");
        input.value = "";

        //Creo los elementos de la lista
        const task = document.createElement("li");
        task.classList.add("card");
        const taskContent = document.createElement("div");
        const titleTask = document.createElement("span");
        titleTask.classList.add("task");
        titleTask.innerText = value;


        taskContent.appendChild(checkComplete())
        taskContent.appendChild(titleTask);
        // Agrego el elemento content a html
        task.appendChild(taskContent);
        task.appendChild(deleteIcon());
        // Agrego el elemento al padre
        list.appendChild(task);
    }

    // Hago que un boton realize algo
    const button = document.querySelector(".btnCreate");
    button.addEventListener("click", createTask);

    // check de elemeto completo
    const checkComplete = () => {
        const i = document.createElement("i");
        i.classList.add("icon", "fa-check-square", "far");
        i.addEventListener("click", completeTask);
        return i;
    }

    const completeTask = (event) => {
        const element = event.target;
        // Cambio la clase si esta activado a desactivaso y viceversa
        element.classList.toggle("fas");
        element.classList.toggle("completeIcon");
        element.classList.toggle("far");
    };

    const deleteIcon = () => {
        const i = document.createElement("i");
        i.classList.add("fas","fa-trash-alt","trashIcon","icon");
        i.addEventListener("click", deleteTasks);
        return i;
    }
    
    const deleteTasks = (event) => {
        // Busco el elemento padre
        console.log(event.target.parentElement);
        const parent = event.target.parentElement;
        parent.remove();
        
    }

})();