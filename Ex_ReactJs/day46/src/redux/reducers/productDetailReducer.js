// import constants
import {
    FETCH_PRODUCT_REQUEST,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_ERROR,
} from '../constants/product.js';

const initialState = {
    requesting: false,
    success: false,
    message: null,
    data: null
}

// bắt từng action type
function productReducers(state = initialState, action) {
    switch (action.type) {
        case FETCH_PRODUCT_REQUEST:
            return {
                ...state,
                requesting: true
            };
        case FETCH_PRODUCT_SUCCESS:
            return {
                ...state,
                requesting: false,
                success: true,
                data: action.payload
            };
        case FETCH_PRODUCT_ERROR:
            return {
                ...state,
                requesting: false,
                message: action.message
            };

        default:
            return state;
    }
}

export default productReducers;
