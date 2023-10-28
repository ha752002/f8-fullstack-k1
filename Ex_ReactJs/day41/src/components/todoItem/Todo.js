import { updateTodo, deleteTodo } from "../../services/TodoServices";

export const updateTodoList = async (id, body) => {
    const dataResponse = await updateTodo(id, body);
    if (dataResponse.code === 200) {
        alert(dataResponse.message);
        return dataResponse.data;
    } else {
        return false;
    }
}


export const deleteTodoList = async (id) => {
    const dataResponse = await deleteTodo(id);
    if (dataResponse.code === 200) {
        return dataResponse.data;
    } else {
        return false;
    }
}

