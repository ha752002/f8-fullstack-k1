import {apiClient} from "./api.js";

const getProducts= async (requestParam) => {
    return await apiClient.get('/products', requestParam);
}


const  getProductDetail= async (productId) => {
    return await apiClient.get(`/products/${productId}`);
}


export {getProductDetail,getProducts}