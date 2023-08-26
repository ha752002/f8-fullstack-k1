
var todoForm = document.querySelector('.form-wrapper');
var input = todoForm.querySelector('.input');
var formElement = document.querySelector(".todo-form")
var todoContainer = document.querySelector('#todoContainer');
var listData = [];

formElement.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!input.value.trim()) return false;
    if (e.type === "submit") {
        listData.push(input.value);
        localStorage.todos = JSON.stringify(listData);
    }
    renderTodo();
    input.value = '';
    renderFormEditTodo();

});


function renderTodo() {
    var todoListContainer = document.getElementById("todoList");
    todoListContainer.innerHTML = '';

    listData.forEach(function (todo, index) {
        var todoContainer = document.createElement("div");
        todoContainer.classList.add("todo");

        var todoInner = document.createElement("div");
        todoInner.classList.add("todo-inner");

        var todoText = document.createElement("p");
        todoText.classList.add("todo-text");
        todoText.textContent = todo;

        var todoButtons = document.createElement("div");
        todoButtons.classList.add("todo-list");

        var editButton = document.createElement("button");
        editButton.classList.add("edit-todo");
        editButton.setAttribute("id", "editButton-" + index);
        editButton.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';

        var removeButton = document.createElement("button");
        removeButton.classList.add("remove-todo");
        removeButton.setAttribute("id", "removeButton-" + index);
        removeButton.innerHTML = '<i class="fa-solid fa-trash"></i>';

        todoButtons.appendChild(editButton);
        todoButtons.appendChild(removeButton);
        todoInner.appendChild(todoText);
        todoInner.appendChild(todoButtons);
        todoContainer.appendChild(todoInner);
        todoListContainer.appendChild(todoContainer);


        editButton.addEventListener('click', function () {
            showEditForm(index);
        });

    });
}

renderTodo();

function renderFormEditTodo() {
    var formEditContainer = document.getElementById("form-edit");
    formEditContainer.innerHTML = '';

    listData.forEach(function (todo, index) {
        var form = document.createElement("form");
        form.classList.add("todo-form");
        form.classList.add("todo-form" + index);


        var formWrapper = document.createElement("div");
        formWrapper.classList.add("form-wrapper");

        var input = document.createElement("input");
        input.setAttribute("type", "text");
        input.classList.add("input");
        input.setAttribute("placeholder", "Edit task here");
        input.value = todo;

        var saveButton = document.createElement("button");
        saveButton.setAttribute("type", "button");
        saveButton.classList.add("btn");
        saveButton.textContent = "Add Task";

        saveButton.dataset.index = index;

        formWrapper.appendChild(input);
        formWrapper.appendChild(saveButton);
        form.appendChild(formWrapper);
        formEditContainer.appendChild(form);


        saveButton.addEventListener('click', function () {
            listData[index] = input.value;
            localStorage.todos = JSON.stringify(listData);
            renderTodo();
        });

    });
}


