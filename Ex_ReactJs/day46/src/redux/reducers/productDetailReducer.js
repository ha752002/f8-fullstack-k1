
import {
    FETCH_PRODUCT_DETAIL_ERROR,
    FETCH_PRODUCT_DETAIL_REQUEST,
    FETCH_PRODUCT_DETAIL_SUCCESS
} from "../constants/productDetail.js";

const initialState = {
    requesting: false,
    success: false,
    message: null,
    data: null
}

// bắt từng action type
function productDetailReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PRODUCT_DETAIL_REQUEST:
            return {
                ...state,
                requesting: true
            };
        case FETCH_PRODUCT_DETAIL_SUCCESS:
            return {
                ...state,
                requesting: false,
                success: true,
                data: action.payload
            };
        case FETCH_PRODUCT_DETAIL_ERROR:
            return {
                ...state,
                requesting: false,
                message: action.message
            };

        default:
            return state;
    }
}

export default productDetailReducer;
