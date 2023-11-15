import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import CartItem from "./components/CartItem.jsx";
import {clearCart, deleteProductCart} from "../../redux/actions/cartAction.js";
import {customToast} from "../../utils/toastUtil.js";
import {NavLink} from "react-router-dom";

function CartPage(props) {
    const cartProducts = useSelector((state) => state.cart.products);
    const dispatch = useDispatch();
    console.log(cartProducts);

    return (
        <div>
            {cartProducts.map((product) => (
                <div style={{maxWidth: "800px", margin: "30px auto"}} key={product._id}>
                    <CartItem product={product}/>
                </div>
            ))}
            {
                cartProducts.length > 0 ?
                    <div className="row justify-content-center">
                        <button onClick={() => {
                            dispatch(clearCart());
                        }} className="btn btn-success absolute col-6">Checkout
                        </button>
                    </div> : <div style={{width : "80%", margin : "80px auto", textAlign : "center"}}>
                        <h2 style={{textAlign: "center"}}> KHÔNG CÓ SẢN PHẨM NÀO TRONG GIỎ</h2>
                        <NavLink to="/">
                            <button className="btn btn-primary">Go Home
                            </button>
                        </NavLink>
                    </div>

            }

        </div>
    );
}

export default CartPage;
