import { postTodo, getAllTodo } from "../../services/TodoServices";


export const addTodo = async (value) => {
    const dataResponse = await postTodo(value);
    if (dataResponse.code === 201) {
        return dataResponse;
    } else {
        return false;
    }
}


export const getAllTodoLists = async () => {
    const dataResponse = await getAllTodo();
    if (dataResponse.code === 200) {
        return dataResponse.data;
    } else {
        return false;
    }
}


