import { updateTodo, deleteTodo } from "../../services/TodoServices";
import { toast } from 'react-toastify';

export const updateTodoList = async (id, body) => {
    const dataResponse = await updateTodo(id, body);
    if (dataResponse.code === 200) {
        // alert(dataResponse.message);
        toast.success("update thành công");
        return dataResponse.data;
    } else {
        toast.error(dataResponse.message);
        return false;
    }
}


export const deleteTodoList = async (id) => {
    const dataResponse = await deleteTodo(id);
    if (dataResponse.code === 200) {
        toast.success("Xóa todo thành công");
        return true;
    } else {
        // toast.error(dataResponse.message);
        return false;

    }
}

