import {
    get,
    post,
    remove,
    updatePost
} from "./service.js";

document.addEventListener("DOMContentLoaded", async function () {
    const $ = document.querySelector.bind(document);

    const formAdd = $('.form-add');
    const btnAdd = $('.btn-add');
    const overlay = $('.over-lay');
    const todoAppWrapper = $('.todo-app-wrapper');
    const btnCancel = $('.btn-cancel');
    const btnSave = $('.btn-save');
    const inputText = $('input[name="input-text"]');
    const inputSearch = $('#input-search');

    let editingTodoId = null;

    async function start() {
        try {
            const todos = await get();

            todos.forEach((todo) => {
                renderTodoItem(todo.title, todo.id);
            });

            btnSave.addEventListener('click', handleSaveButtonClick);
            btnAdd.addEventListener('click', handleAddButtonClick);
            overlay.addEventListener('click', handleOverlayClick);
            btnCancel.addEventListener('click', handleCancelButtonClick);

        } catch (error) {
            console.error("Lỗi trong quá trình khởi tạo:", error);
        }
    }

    start();

    async function handleSaveButtonClick(e) {
        e.preventDefault();

        if (!inputText.value.trim()) {
            alert('Vui lòng nhập nội dung trước khi lưu.');
            return;
        }

        try {
            if (editingTodoId) {
                const editedData = {
                    "title": inputText.value,
                };
                const response = await updatePost(editingTodoId, editedData);
                // Xử lý phản hồi sau khi cập nhật
                if (response && response.title) {
                    alert('Đã cập nhật thành công!');
                    const updatedTodoItem = todoAppWrapper.querySelector(`[data-id="${editingTodoId}"]`);
                    if (updatedTodoItem) {
                        // Cập nhật nội dung trong <p>
                        updatedTodoItem.querySelector('p').innerHTML = response.title;
                    }
                } else {
                    alert('Có lỗi xảy ra khi cập nhật công việc.');
                }
                editingTodoId = null;
                formAdd.classList.remove("show");
                inputText.value = '';
            } else {
                const response = await post({
                    "title": inputText.value,
                });

                if (response && response.title) {
                    inputText.value = '';
                    formAdd.classList.remove("show");
                    alert('Đã thêm thành công!');
                    renderTodoItem(response.title, response.id);
                } else {
                    alert('Có lỗi xảy ra khi thêm công việc mới.');
                }
            }
        } catch (error) {
            console.error("Lỗi khi lưu công việc:", error);
        }
    }


    inputSearch.addEventListener('input', handleSearch);

    function handleSearch() {
        const searchText = inputSearch.value.toLowerCase();
        const todoItems = todoAppWrapper.querySelectorAll('.todo-item');

        todoItems.forEach((todoItem) => {
            const todoText = todoItem.querySelector('p').textContent.toLowerCase();

            if (todoText.includes(searchText)) {
                todoItem.style.display = 'flex';
            } else {
                todoItem.style.display = 'none';
            }
        });
    }

    function handleAddButtonClick(e) {
        formAdd.classList.toggle("show");
    }

    function handleOverlayClick(e) {
        formAdd.classList.remove("show");
        editingTodoId = null;
    }

    function handleCancelButtonClick(e) {
        e.preventDefault();
        inputText.value = '';
        formAdd.classList.remove("show");
        editingTodoId = null;
    }

    // Hàm tạo một mục công việc (todo-item)
    function createTodoItem(title, id) {
        const todoItem = document.createElement("div");
        todoItem.classList.add('todo-item');
        todoItem.setAttribute('data-id', id);

        const p = document.createElement("p");
        p.innerHTML = title;

        const rowFeature = document.createElement("div");
        rowFeature.classList.add('row-feature');

        const buttonRemove = document.createElement("button");
        buttonRemove.classList.add('btn-icon', 'btn-remove');
        buttonRemove.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
        buttonRemove.addEventListener('click', async function (e) {
            try {
                await remove(id);
                todoAppWrapper.removeChild(todoItem);
            } catch (error) {
                console.error("Lỗi khi xóa công việc:", error);
            }
        });

        const buttonEdit = document.createElement("button");
        buttonEdit.classList.add('btn-icon', 'btn-edit');
        buttonEdit.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
        buttonEdit.addEventListener('click', async (e) => {
            e.preventDefault();
            editingTodoId = id;

            formAdd.classList.add("show");
            inputText.value = title;
        });


        const buttonCheck = document.createElement("button");
        buttonCheck.classList.add('btn-icon', 'btn-check');
        buttonCheck.innerHTML = '<i class="fa-solid fa-check-to-slot"></i>';
        buttonCheck.addEventListener('click', async function (e) {
            try {
                await handleCheckButtonClick(id);
            } catch (error) {
                console.error("Lỗi khi kiểm tra công việc:", error);
            }
        });

        rowFeature.appendChild(buttonRemove);
        rowFeature.appendChild(buttonEdit);
        rowFeature.appendChild(buttonCheck);

        todoItem.appendChild(p);
        todoItem.appendChild(rowFeature);

        return todoItem;
    }

    // Hàm xử lý kiểm tra công việc
    async function handleCheckButtonClick(id) {

    }

    // Hàm render một mục công việc và thêm vào danh sách
    function renderTodoItem(title, id) {
        try {
            const todoItem = createTodoItem(title, id);
            todoAppWrapper.appendChild(todoItem);
        } catch (error) {
            console.error("Lỗi khi render mục công việc:", error);
        }
    }

});
