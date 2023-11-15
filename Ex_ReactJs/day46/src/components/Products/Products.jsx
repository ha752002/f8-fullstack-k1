import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProducts} from "../../redux/actions/productAction.js";
import 'bootstrap/dist/css/bootstrap.min.css';

import ProductItem from "./component/ProductItem.jsx";
import {toggleLoading} from "../../redux/actions/loadingAction.js";
import {config} from "../../services/config.js";
import Pagination from "./component/Pagination.jsx";
import {useParams} from "react-router-dom";

function Products(props) {
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();
    const params = useParams()

    // console.log(params)
    useEffect(() => {
        dispatch(fetchProducts({limit: config.PAGE_LIMIT, page: params.page?? 1}));
    }, [dispatch, params.page]);

    useEffect(() => {
        console.log(products.requesting)
        dispatch(toggleLoading(products.requesting));
    }, [products.requesting]);

    console.log('renderProducts')

    const renderProducts = () => {
        if (products.data && products.data.length > 0) {
            return (
                <>
                    <div className="row" style={{
                        width: "800px", margin: "30px auto"
                    }}>
                        {products.data.map((product, index) => (
                            <ProductItem product={product} key={product._id}/>
                        ))}
                    </div>
                </>
            );
        } else {
            return <div>No products available.</div>;
        }
    };

    return <>{products.requesting ? <div>Loading</div> : renderProducts()}</>;
}

export default Products;