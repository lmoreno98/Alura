(() => {

    const addTask = (evento) => {
        const list = document.querySelector(".cardsList");
        const task = createTask(evento);
        list.appendChild(task);
    }
    // Funciones anonimas con =>
    const createTask = (evento) => {
        // Hago que cuando clique el formulario no se reinicie la pantalla
        evento.preventDefault();
        // Capturo el valor de un input
        const input = document.querySelector(".inputForm");
        const calendar = document.querySelector(".inputDate");
        const date = calendar.value;
        //Formateo la fecha con moment
        const dateFormat = moment(date).format("DD/MM/YYYY");
        const value = input.value;
        
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
        const dateElement = document.createElement("span");
        dateElement.innerHTML = dateFormat;
        task.appendChild(taskContent);
        task.appendChild(dateElement);
        task.appendChild(deleteIcon());
        return task;
        
    }

    // Hago que un boton realize algo
    const button = document.querySelector(".btnCreate");
    button.addEventListener("click", addTask);

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

        const parent = event.target.parentElement;
        parent.remove();
        
    }

})();

