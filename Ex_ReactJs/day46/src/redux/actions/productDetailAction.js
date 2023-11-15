import {getProductDetail} from "../../services/cartServices.js";
import {
    FETCH_PRODUCT_DETAIL_ERROR,
    FETCH_PRODUCT_DETAIL_REQUEST,
    FETCH_PRODUCT_DETAIL_SUCCESS
} from "../constants/productDetail.js";


export const fetchProductDetail = (requestParam) => {
    const callback = async (dispatch) => {
        try {
            dispatch({type: FETCH_PRODUCT_DETAIL_REQUEST});

            const response = await getProductDetail(requestParam)
            console.log(response.data)
            dispatch({
                type: FETCH_PRODUCT_DETAIL_SUCCESS,
                payload: response.data
            });
        } catch (error) {
            console.error(error);
            dispatch({
                type: FETCH_PRODUCT_DETAIL_ERROR,
                message: error
            });
        }
    }
    return callback
}