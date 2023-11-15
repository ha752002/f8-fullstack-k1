import {
    ADD_PRODUCT, CLEAR_CART, DECREMENT_AMOUNT_PRODUCT, DELETE_PRODUCT_ITEM_CART, INCREMENT_AMOUNT_PRODUCT
} from "../constants/cart.js";
import {getLocalStorage} from "../../utils/localStorage.js";
import {customToast} from "../../utils/toastUtil.js";

const getCartHistory = () => {
    try {
        return getLocalStorage('cartProducts')??[]
    } catch (e) {
        return []
    }
}

const initialState = {
    products: getCartHistory()
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT : {
            const products = [...state.products]
            const product = action.payload;
            const existProduct = products.filter((p) => {
                return p._id === product._id
            })[0]
            console.log(existProduct)
            if (!existProduct) {
                product.amount = 1
                products.push(product);
            } else {
                existProduct.amount++
            }
            return {
                ...state, products: products
            }

        }

        case INCREMENT_AMOUNT_PRODUCT : {
            const products = [...state.products];
            const productCart = action.payload;
            const exitProduct = products.filter((product) => {
                return product._id === productCart._id;
            })[0]

            if (exitProduct) {
                exitProduct.amount++;
            }

            return {
                ...state, products: products


            }
        }

        case DECREMENT_AMOUNT_PRODUCT : {
            const products = [...state.products]
            const productAction = action.payload
            const existProduct = products.filter((product) => {
                return product._id === productAction._id
            })[0]

            if (existProduct.amount <= 1) {
                const indexProduct = products.indexOf(existProduct)
                products.splice(indexProduct, 1);
            } else {
                existProduct.amount--
            }

            return {
                ...state, products
            }

        }

        case DELETE_PRODUCT_ITEM_CART : {
            const products = [...state.products]
            const productsAction = action.payload
            const exitProduct = products.filter((product) => {
                return product._id === productsAction._id
            })[0]

            if (exitProduct) {
                const indexProduct = products.indexOf(exitProduct);
                products.splice(indexProduct, 1)
            }


            return ({
                ...state, products
            })
        }

        case CLEAR_CART : {
            return ({
                ...state,
                products : []
            })
        }

        default :
            return state;
    }
}

export default cartReducer;
