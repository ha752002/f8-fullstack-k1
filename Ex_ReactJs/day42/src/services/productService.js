import { apiClient } from "./api"


export const getProducts = async (requestParam) => {
    const response = await apiClient.get(`/products`, requestParam);
    console.log(response);
    return response;
};

