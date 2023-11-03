import React, { useCallback, useEffect, useReducer, useContext } from 'react';
import { checkLogin, handleLogin } from '../../helpers/authHelper';
import { handleGetProducts } from '../../helpers/productHelper';
import ProductList from '../../components/ProductList/ProductList';
import { handleGetCart, handleUpdateCart, handleCheckout } from '../../helpers/cartHelper';
import CartList from '../../components/CartList/CartList';
import _debounce from 'lodash/debounce';
import { toast } from 'react-toastify';
import { AppContext } from '../../App';

export const CartContext = React.createContext();

export default function Cart() {
    const appContext = useContext(AppContext);
    const reduce = (prev, action = {}) => {
        switch (action.type) {
            case 'productList/change':
                return {
                    ...prev,
                    productList: action.payload,
                };

            case 'cartList/change':
                return {
                    ...prev,
                    cartList: action.payload,
                };

            case 'cartList/add':
                let newCartList = [...prev.cartList];
                const cart = newCartList.filter((item) => item._id === action.payload._id)[0];
                // console.log(cart);
                if (cart) {
                    cart.amount = cart.amount ? cart.amount + 1 : 2;
                } else {
                    newCartList.push({ ...action.payload });
                }
                handleUpdateCart(newCartList);
                return {
                    ...prev,
                    cartList: newCartList,
                };

            case 'cartList/clear':
                localStorage.removeItem('cart');
                return {
                    ...prev,
                    cartList: [],
                };
            default:
                return prev;
        }
    };

    const [cartState, dispatch] = useReducer(reduce, {
        productList: [],
        cartList: [],
    });

    const handleCheckLogin = async () => {
        const email = prompt('Please Email');
        // console.log(email);
        const response = await handleLogin({ email: email });

        if (!response) {
            return await handleCheckLogin();
        }

        checkLogin().then((response) => {
            if (response) {
                appContext.handleToggleLoading(false);
                toast.success(`chào mừng ${response.emailId.name} quay trở lại`);
            }
        });
    };

    const handleRenderProduct = async () => {
        const response = await handleGetProducts({ limit: 8 });
        // console.log(response);
        dispatch({
            type: 'productList/change',
            payload: response.data,
        });
    };

    const handleAddCart = (product) => {
        dispatch({
            type: 'cartList/add',
            payload: product,
        });
    };

    const handleRenderCart = () => {
        // console.log(111);
        const cartList = handleGetCart();
        // console.log(cartList);
        dispatch({
            type: 'cartList/change',
            payload: cartList,
        });
    };

    const handleClickCheckout = useCallback(
        _debounce(() => {
            appContext.handleToggleLoading(true);

            checkLogin().then(async (check) => {
                appContext.handleToggleLoading(false);
                if (check) {
                    const checkoutList = cartState.cartList.map((e) => {
                        return {
                            productId: e._id,
                            quantity: e.amount ?? 1,
                        };
                    });
                    const response = await handleCheckout(checkoutList);
                    // console.log(cartState);

                    if (response) {
                        dispatch({
                            type: 'cartList/clear',
                        });
                    }
                } else {
                    await handleCheckLogin();
                }
            });
        }, 700),
        [cartState.cartList],
    );

    useEffect(() => {
        appContext.handleToggleLoading(true);
        checkLogin().then(async (response) => {
            if (!response) {
                await handleCheckLogin();
            } else {
                appContext.handleToggleLoading(false);
                toast.success(`chào mừng ${response.emailId.name} quay trở lại`);
            }
            await handleRenderProduct();
            handleRenderCart();
        });
    }, []);

    return (
        <>
            <CartContext.Provider value={{ cartState, handleAddCart, handleClickCheckout }}>
                <ProductList />
                <CartList />
            </CartContext.Provider>
        </>
    );
}
