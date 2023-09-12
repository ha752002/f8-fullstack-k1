var todo = document.querySelector('.todo');
var todoList = todo.querySelector('.todo-list');
var todoForm = todo.querySelector('form');


todoForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var inputEl = this.children[0];
    var name = inputEl.value;
    // var todo = `<p>${name}</p>`
    // todoList.innerHTML += todo;

    var todo = document.createElement('p');
    todo.innerText = name;
    todoList.appendChild(todo);
    inputEl.value = '';
})