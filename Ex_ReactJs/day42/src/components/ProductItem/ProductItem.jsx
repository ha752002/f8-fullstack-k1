import React, { useContext } from 'react';
import { CartContext } from '../../pages/Cart';

export default function ProductItem({ product }) {
    const context = useContext(CartContext);
    // console.log(product);
    return (
        <>
            <div className="col-md-3">
                <div className="card h-100">
                    <img src={product.image} alt={product.name} className="card-img-top" />
                    <div className="card-body d-flex flex-column">
                        <h6 className="card-title">{product.name}</h6>
                        <p className="card-text mt-auto">${product.price}</p>
                        <button
                            onClick={() => {
                                context.handleAddCart(product);
                            }}
                            className="btn btn-success"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
