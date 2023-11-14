import {TOGGLE_LOADING} from "../constants/loading.js";


const initialState = {
    visible: false,
}

// bắt từng action type
function loadingReducers(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_LOADING:
            return {
                ...state,
                visible: action.payload
            };

        default:
            return state;
    }
}

export default loadingReducers;
