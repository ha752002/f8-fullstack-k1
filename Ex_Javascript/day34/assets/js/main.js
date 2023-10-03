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
    const todoList = $('.list-todo');
    const btnCompleted = $('.btn__completed');
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
                todoList.removeChild(todoItem); // Sửa lại thành todoList
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

    function updateCompletedCount() {
        const completedList = $('.list-todo__completed');
        const completedCount = completedList.querySelectorAll('.todo-item').length;
        const completedCountSpan = $('#completedCount');
        completedCountSpan.textContent = `Completed Todos ${completedCount}`;
    }


    function addTodoToCompletedList(title, id) {
        const todoItem = createTodoItem(title, id);
        const completedList = $('.list-todo__completed');
        completedList.appendChild(todoItem);
        updateCompletedCount(); // Cập nhật số lượng phần tử đã hoàn thành
    }

    // Hàm xử lý khi ấn nút btn-check trong list-todo__completed
    async function handleCheckCompletedButtonClick(id) {
        try {
            // Lấy todo-item có data-id tương ứng trong list-todo__completed
            const todoItem = $('.list-todo__completed').querySelector(`[data-id="${id}"]`);
            if (!todoItem) {
                console.error(`Không tìm thấy todo-item với data-id ${id} trong list-todo__completed`);
                return;
            }

            // Lấy tham chiếu đến nút btn-check trong todo-item
            const buttonCheck = todoItem.querySelector('.btn-check');

            // Di chuyển todo-item từ list-todo__completed trở lại list-todo
            const todoList = $('.list-todo');
            buttonCheck.style.backgroundColor = ''; // Đặt lại màu sắc
            todoList.insertBefore(todoItem, btnCompleted);

            // Cập nhật số lượng phần tử đã hoàn thành
            updateCompletedCount();
        } catch (error) {
            console.error("Lỗi khi xử lý btn-check trong list-todo__completed:", error);
        }
    }

    // Hàm xử lý khi ấn nút btn-check trong list-todo
    async function handleCheckButtonClick(id) {
        try {
            // Kiểm tra xem todo-item có data-id tương ứng đã ở trong list-todo__completed hay không
            const isCompleted = $('.list-todo__completed').contains($(`[data-id="${id}"]`));

            if (isCompleted) {
                // Nếu đã ở trong list-todo__completed, thì gọi hàm xử lý khi ấn nút btn-check trong list-todo__completed
                handleCheckCompletedButtonClick(id);
            } else {
                // Nếu chưa ở trong list-todo__completed, thì gọi hàm xử lý khi ấn nút btn-check trong list-todo
                // Lấy todo-item có data-id tương ứng
                const todoItem = todoAppWrapper.querySelector(`[data-id="${id}"]`);
                if (!todoItem) {
                    console.error(`Không tìm thấy todo-item với data-id ${id}`);
                    return;
                }

                // Lấy tham chiếu đến nút btn-check trong todo-item
                const buttonCheck = todoItem.querySelector('.btn-check');

                // Di chuyển todo-item vào list-todo__completed
                const completedList = $('.list-todo__completed');
                buttonCheck.style.backgroundColor = 'green';
                completedList.appendChild(todoItem);

                // Cập nhật số lượng phần tử đã hoàn thành
                updateCompletedCount();
            }
        } catch (error) {
            console.error("Lỗi khi kiểm tra công việc:", error);
        }
    }

    btnCompleted.addEventListener('click', function () {
        const completedList = $('.list-todo__completed');
        completedList.classList.toggle("active");

        if (completedList.classList.contains("active")) {
            btnCompleted.style.backgroundColor = "green";
        } else {
            btnCompleted.style.backgroundColor = "";
        }
    });

    // Hàm render một mục công việc và thêm vào danh sách
    function renderTodoItem(title, id) {
        try {
            const todoItem = createTodoItem(title, id);
            todoList.insertBefore(todoItem, btnCompleted); // Sửa lại thành todoList
        } catch (error) {
            console.error("Lỗi khi render mục công việc:", error);
        }
    }


});
