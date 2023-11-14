import { combineReducers } from 'redux';
import productReducers from "./productReducer.js";
import cartReducer from "./cartReducer.js";
import loadingReducers from "./loadingReducer.js";

const reducers = combineReducers({
    products: productReducers,
    cart : cartReducer,
    loading : loadingReducers
});

export default (state, action) => reducers(state, action);