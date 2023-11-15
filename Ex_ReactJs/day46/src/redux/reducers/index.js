import { combineReducers } from 'redux';
import productReducers from "./productReducer.js";
import cartReducer from "./cartReducer.js";
import loadingReducers from "./loadingReducer.js";
import productDetail from "../../components/Products/component/ProductDetail.jsx";
import productDetailReducer from "./productDetailReducer.js";

const reducers = combineReducers({
    products: productReducers,
    cart : cartReducer,
    loading : loadingReducers,
    productDetail : productDetailReducer
});

export default (state, action) => reducers(state, action);