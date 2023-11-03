import { getProducts } from "../services/productService";
import { toast } from 'react-toastify';


export const handleGetProducts = async (requestParam) => {
    try {
        const response = await getProducts(requestParam);
        return response;
    } catch (error) {
        toast.error(error.message);
    }

}