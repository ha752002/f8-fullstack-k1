// Tạo đối tượng taskManager
let taskManager = {
    tasks: [],

    addTask: function (task) {
        this.tasks.push(task);
        console.log(`Thêm tác vụ: ${task}`);
    },

    editTask: function (index, newTask) {
        if (index >= 0 && index < this.tasks.length) {
            this.tasks[index] = newTask;
            console.log(`Sửa tác vụ tại vị trí ${index}: ${newTask}`);
        } else {
            console.log("Vị trí không hợp lệ.");
        }
    },

    deleteTask: function (index) {
        if (index >= 0 && index < this.tasks.length) {
            let deletedTask = this.tasks.splice(index, 1);
            console.log(`Xóa tác vụ: ${deletedTask}`);
        } else {
            console.log("Vị trí không hợp lệ.");
        }
    },

    showTasks: function () {
        console.log("Danh sách tác vụ:");
        this.tasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task}`);
        });
    }
};

// Sử dụng các phương thức của đối tượng taskManager
taskManager.addTask("Mua thực phẩm");
taskManager.addTask("Đọc sách");
taskManager.addTask("Làm bài tập");

taskManager.showTasks();

taskManager.editTask(1, "Đọc sách về lập trình");
taskManager.showTasks();

taskManager.deleteTask(2);
taskManager.showTasks();