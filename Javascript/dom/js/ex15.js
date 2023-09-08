var todo = document.querySelector('.todos');
console.log(todo);
var todoList = todo.querySelector('.todo-list');
var todoForm = todo.querySelector('form');


todoForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var inputEl = this.children[0];
    var doName = inputEl.value;

    if (!doName.length) {
        return;
    }

    var p = document.createElement('p');
    p.innerText = doName;

    var deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.style.marginLeft = '90px';

    deleteButton.addEventListener('click', handleDeleteButton);

    p.appendChild(deleteButton);

    todoList.append(p);


    inputEl.value = "";
})

function handleDeleteButton() {
    this.parentNode.remove();
}



// var content = document.querySelector('.content');
// content.childNodes[0].data = "hihihi";


var content = document.querySelector('.content h2');
