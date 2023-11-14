import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProducts} from "../../redux/actions/productAction.js";
import 'bootstrap/dist/css/bootstrap.min.css';

import {FETCH_PRODUCT_ERROR, FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS} from "../../redux/constants/product.js";
import {getProducts} from "../../services/cartServices.js";
import {addToCart, clearCart} from "../../redux/actions/cartAction.js";
import ProductItem from "./component/ProductItem.jsx";
import {toggleLoading} from "../../redux/actions/loadingAction.js";

function Products(props) {
    const products = useSelector((state) => state.products);
    // const requesting = useSelector((state) => state.products.requesting);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts({limit: 10, page: 1}));
    }, [dispatch]);

    useEffect(() => {
        console.log(products.requesting)
        dispatch(toggleLoading(products.requesting));
    }, [products.requesting]);

    console.log('renderProducts')

    const renderProducts = () => {
        if (products.data && products.data.length > 0) {
            return (
                <div className="row" style={{
                    width: "800px", margin: "30px auto"
                }}>
                    {products.data.map((product, index) => (
                       <ProductItem product={product} key={product._id}/>
                    ))}
                </div>
            );
        } else {
            return <div>No products available.</div>;
        }
    };

    return <>{products.requesting ? <div>Loading</div> : renderProducts()}</>;
}

export default Products;