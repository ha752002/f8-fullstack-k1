import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    addToCart,
    decrementAmountProduct,
    deleteProductCart,
    incrementAmountProduct
} from "../../../redux/actions/cartAction.js";
import {useDispatch} from "react-redux";
import products from "../../../components/Products/Products.jsx";

function CartItem({product}) {
    const dispatch = useDispatch();

    // console.log(product)
    return (<div className="card" style={{
        boxShadow: " 0 0 2px #252b48",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginLeft: "20%",
        padding: ".8rem",
        maxHeight: "190px"
    }}>
        <img className="card-img-top" src={product.image}
             alt="product image" style={{width: "9rem", height: "6rem", boxShadow: "0 3px #9d174d"}}/>
        <div className="card-body d-flex " >
            <div className="d-flex align-items-center " style={{textAlign: "center",gap : "3px", flexDirection : "column"}} >
                <p className="text-danger">{product.brand}</p>
                <h6 className="card-title">{product.name}</h6>
                <p className="card-text">
                    <span className="text-danger">$</span>{product.price}
                </p>
            </div>

            <div className="btn-group" style={{display: "flex", justifyContent: "center", padding: "34px 10px"}}>
                <button type="button" className="btn btn-danger" onClick={() => {
                    dispatch(decrementAmountProduct(product))
                }}>-</button>
                <div className="btn btn-light">{product.amount}</div>
                <button type="button" className="btn btn-danger" onClick={() => {
                    dispatch(incrementAmountProduct(product));
                }}>+</button>
            </div>

            <div className="card-footer d-flex justify-content-between align-items-center" style={{gap : "10px"}}>
                <div style={{fontSize : "1.5rem"}}>
                    <span className="text-danger">$</span>
                    <span className="text-black">{product.amount * product.price}</span>

                </div>
                <div className="ml-2">
                    <button onClick={() =>{
                        dispatch(deleteProductCart(product));
                    }}>
                        <svg stroke="currentColor" fill="currentColor" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path></svg>
                    </button>
                </div>
            </div>
        </div>

    </div>);
}

export default CartItem;
