import React, { useContext } from 'react';
import { CartContext } from '../../pages/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ProductItem from '../ProductItem/ProductItem';

export default function ProductList() {
    // console.log(context.cartState.productList);
    const context = useContext(CartContext);

    return (
        <>
            <div className="col-md-8 rounded-2" style={{ backgroundColor: '#314961' }}>
                <div style={{ width: '84%', margin: '40px auto' }}>
                    <h1 className="font-bold text-white">Welcome to Shop!</h1>
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                        {context.cartState.productList &&
                            context.cartState.productList.map((product) => {
                                return <ProductItem key={product._id} product={product} />;
                            })}
                    </div>
                </div>
            </div>
        </>
    );
}
