import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import {addToCart} from "../../../redux/actions/cartAction.js";
import {NavLink} from "react-router-dom";
import {removeAccents} from "../../../utils/stringUtil.js";

const ProductItem = ({ product }) => {
    const dispatch = useDispatch();

    return (
        <div key={product.id} className="col-md-3 mb-4">
            <div className="card d-flex flex-column h-100">
                <div className="card-header">

                 <NavLink to={`/detail/${removeAccents(product.name).replaceAll(" ","-")}/${product._id}`}>
                     <img
                         src={product.image}
                         alt="Product Image"
                         className="card-img-top"
                         style={{ height: '7rem',marginBottom :'10px' }}
                     />
                     <h2 className="card-title h6 text-center mt-auto" style={{ marginTop: '8px' ,
                         overflow: 'hidden',
                         textOverflow: "ellipsis",
                         whiteSpace: "nowrap"}}>
                         {product.name}
                     </h2>
                 </NavLink>

                </div>
                <div
                    className="card-body d-flex flex-row mb-auto"
                    style={{
                        padding: '10px 8px',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flex: '1',
                    }}
                >
                    <div
                        className="card-text"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            fontWeight: '600',
                            fontSize: '1.3rem',
                        }}
                    >
            <span className="dolar-span mt-auto" style={{ color: '#9d174d', fontSize: '1.5rem' }}>
              $
            </span>
                        {product.price}
                    </div>
                    <button
                        onClick={() => {
                            dispatch(addToCart(product));
                        }}
                    >
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                            id="shopping-cart"
                            height="2em"
                            width="1.6em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,28-28H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87ZM96,204a12,12,0,1,1-12-12A12,12,0,0,1,96,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,192,204Zm4-74.57A8,8,0,0,1,188.1,136H69.22L57.59,72H206.41Z"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
