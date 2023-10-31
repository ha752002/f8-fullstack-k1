import { client } from "./API"

export const postTodo = async (body) => {
    try {
        const { data: dataResponse, response: response } = await client.post(`/todos`, body);

        return dataResponse;
    } catch (error) {
        console.log(error);
    }
}


export const getAllTodo = async () => {
    try {
        const { data: dataResponse, response: response } = await client.get(`/todos`);
        return dataResponse;
    } catch (error) {
        console.log(error);
    }
}



export const updateTodo = async (id, body) => {
    try {
        const { data: dataResponse, response: response } = await client.patch(`/todos/${id}`, body);
        return dataResponse;
    } catch (error) {
        console.log(error);
    }
}


export const deleteTodo = async (id) => {
    try {
        const { data: dataResponse, response: response } = await client.delete(`/todos/${id}`);
        return dataResponse;
    } catch (error) {
        console.log(error);
    }
}

export const searchTodo = async (query) => {
    try {
        const { data: dataResponse, response: response } = await client.get(`/todos?q=${query}`);
        return dataResponse;
    } catch (error) {
        console.log(error);
    }
}
