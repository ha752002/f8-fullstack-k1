import { apiClient } from "./api"

export const postOrder = (body) => {
    const response = apiClient.post('/orders', body);
    return response;
}