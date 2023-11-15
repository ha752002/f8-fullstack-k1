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
    data: null,
    totalPage: 0
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
            if(state.totalPage !== action.payload.totalPage) {
                return {
                    ...state,
                    requesting: false,
                    success: true,
                    totalPage: action.payload.totalPage,
                    data: action.payload.data
                };
            }else {
                return {
                    ...state,
                    requesting: false,
                    success: true,
                    data: action.payload.data
                };
            }

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
