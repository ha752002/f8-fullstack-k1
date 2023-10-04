// Hàm tạo một mục công việc (todo-item)
export function createTodoItem(title, id) {
    const todoItem = document.createElement("div");
    todoItem.classList.add('todo-item');
    todoItem.setAttribute('data-id', id);

    const p = document.createElement("p");
    p.textContent = title;

    const rowFeature = document.createElement("div");
    rowFeature.classList.add('row-feature');

    const buttonRemove = createButton('btn-icon btn-remove', '<i class="fa-regular fa-trash-can"></i>');
    const buttonEdit = createButton('btn-icon btn-edit', '<i class="fa-solid fa-pen-to-square"></i>');
    const buttonCheck = createButton('btn-icon btn-check', '<i class="fa-solid fa-check-to-slot"></i>');

    buttonRemove.addEventListener('click', () => handleRemoveButtonClick(id, todoItem));
    buttonEdit.addEventListener('click', () => handleEditButtonClick(id, title));
    buttonCheck.addEventListener('click', () => handleCheckButtonClick(id));

    rowFeature.appendChild(buttonRemove);
    rowFeature.appendChild(buttonEdit);
    rowFeature.appendChild(buttonCheck);

    todoItem.appendChild(p);
    todoItem.appendChild(rowFeature);

    return todoItem;
}

// Hàm tạo nút
function createButton(classes, innerHTML) {
    const button = document.createElement("button");
    button.classList.add(...classes.split(' '));
    button.innerHTML = innerHTML;
    return button;
}

// Sự kiện khi nút Xóa được nhấn
async function handleRemoveButtonClick(id, todoItem) {
    try {
        await remove(id);
        todoList.removeChild(todoItem);
    } catch (error) {
        console.error("Lỗi khi xóa công việc:", error);
    }
}

// Sự kiện khi nút Sửa được nhấn
function handleEditButtonClick(id, title) {
    editingTodoId = id;
    formAdd.classList.add("show");
    inputText.value = title;
}

// Sự kiện khi nút Kiểm tra được nhấn
async function handleCheckButtonClick(id) {
    try {
        await handleCheckButtonClick(id);
    } catch (error) {
        console.error("Lỗi khi kiểm tra công việc:", error);
    }
}

