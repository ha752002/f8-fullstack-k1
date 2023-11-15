
import {
    ADD_PRODUCT, CLEAR_CART,
    DECREMENT_AMOUNT_PRODUCT,
    DELETE_PRODUCT_ITEM_CART,
    INCREMENT_AMOUNT_PRODUCT
} from "../constants/cart.js";
import {customToast} from "../../utils/toastUtil.js";

export const addToCart = (product) => {
    return (dispatch) => {
        try {
            dispatch({
                type: ADD_PRODUCT,
                payload: {...product}
            });
            customToast('Bạn đã thêm sản phẩm thành công');

        } catch (error) {
            console.error(error);
        }
    }
}

export const deleteProductCart = (product) => {
    return (dispatch) => {
        try {
            dispatch({
                type : DELETE_PRODUCT_ITEM_CART,
                payload :product
            })
        } catch (error){
            console.error(error)
        }
    }
}
export const incrementAmountProduct = (product) => {
    return(dispatch)=>{
        try {
            dispatch({
                type :INCREMENT_AMOUNT_PRODUCT,
                payload: product
            })
        }catch (error) {
            console.error(error)
        }
    }
}
export const decrementAmountProduct = (product) => {
    return(dispatch)=>{
        try {
            dispatch({
                type :DECREMENT_AMOUNT_PRODUCT,
                payload: product
            })
        }catch (error) {
            console.error(error)
        }
    }
}
export const clearCart = () => {
    return (dispatch) => {
        try {
            dispatch({
                type : CLEAR_CART,
            })
            customToast('Bạn đã thanh toán thành công');

        }catch (e) {
            console.error(error)
        }
    }
}