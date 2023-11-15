import {
    FETCH_PRODUCT_REQUEST,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_ERROR,
} from '../constants/product.js';
import {getProducts} from "../../services/cartServices.js";

export const fetchProducts = (requestParam) => {
    const callback = async (dispatch) => {
        try {
            dispatch({type: FETCH_PRODUCT_REQUEST});

            const response = await getProducts(requestParam)

            dispatch({
                type: FETCH_PRODUCT_SUCCESS,
                payload: {
                    data : response.data.listProduct,
                    totalPage : response.data.totalPage
                }
            });
        } catch (error) {
            console.error(error);
            dispatch({
                type: FETCH_PRODUCT_ERROR,
                message: error
            });
        }
    }
    return callback
}