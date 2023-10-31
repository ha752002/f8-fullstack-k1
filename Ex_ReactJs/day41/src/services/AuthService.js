import { getAllTodo } from "./TodoServices";
import { client } from "./API";

export const fetchApiKey = async (query) => {
    try {
        const { data: dataResponse, response: response } = await client.get(`/api-key?email=${query}`);

        return dataResponse;
    } catch (error) {
        console.log(error);
    }
};



export const checkLogin = async () => {
    const getAllTodoResult = await getAllTodo();
    if (!getAllTodoResult.data) {
        return false;
    }
    return true;

}






