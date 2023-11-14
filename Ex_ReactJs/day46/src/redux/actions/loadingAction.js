import {TOGGLE_LOADING} from "../constants/loading.js";

export  const toggleLoading = (visible) => {
    return  (dispatch) => {
        dispatch({
            type : "TOGGLE_LOADING",
            payload : visible
        })
    }
}