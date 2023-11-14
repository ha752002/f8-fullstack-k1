
import {
    ADD_PRODUCT, CLEAR_CART,
    DECREMENT_AMOUNT_PRODUCT,
    DELETE_PRODUCT_ITEM_CART,
    INCREMENT_AMOUNT_PRODUCT
} from "../constants/cart.js";
import {useFormAction} from "react-router-dom";
export const addToCart = (product) => {
    return (dispatch) => {
        try {
            dispatch({
                type: ADD_PRODUCT,
                payload: {...product}
            });

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
        }catch (e) {
            console.error(error)
        }
    }
}