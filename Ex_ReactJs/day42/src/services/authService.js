import { apiClient } from "./api"


export const login = async (requestParam) => {
    const response = await apiClient.get(`/api-key`, requestParam);
    // console.log(response);
    return response;
};


export const getUserProfile = async () => {
    const response = await apiClient.get(`/users/profile`);
    // console.log(response);
    return response;
};










