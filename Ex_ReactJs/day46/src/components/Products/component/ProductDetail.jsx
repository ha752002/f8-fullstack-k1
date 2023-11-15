import React, {useEffect} from 'react';
import {NavLink, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchProductDetail} from "../../../redux/actions/productDetailAction.js";
import ProductItem from "./ProductItem.jsx";
import {toggleLoading} from "../../../redux/actions/loadingAction.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import {addToCart} from "../../../redux/actions/cartAction.js";

function ProductDetail(props) {
    const params = useParams();
    const dispatch = useDispatch();
    const productDetail = useSelector((state) => state.productDetail)

    useEffect(() => {
        dispatch(fetchProductDetail(params.id));
        console.log(productDetail)
    }, []);

    useEffect(() => {
        dispatch(toggleLoading(productDetail.requesting));
    }, [productDetail.requesting]);

    const renderProducts = () => {
        if (productDetail.data) {
            return (
                <div className="container mt-5" style={{border: "1px solid black", padding: "20px 10px"}}>
                    <div className="row" id="single-product-container">
                        <div className="col-md-4">
                            <img src={productDetail.data.image} alt="product image" className="img-fluid"/>
                        </div>
                        <div className="col-md-8 d-flex " style={{flexDirection: "column", gap: "10px"}} id="details">
                            <h2 id="brand" style={{color: "#9d174d"}}>{productDetail.data.brand}</h2>
                            <h2 id="title">{productDetail.data.name}</h2>
                            <p id="description">"dolor sit amet, consectetur adipisicing elit. Molestias nam debitis
                                laboriosam quod deserunt dicta sequi adipisci doloribus odio, cumque eveniet repellendus
                                magni iste voluptate praesentium accusamus repudiandae! Enim eum optio accusamus cum
                                beatae illum sapiente voluptate hic praesentium iste, quis assumenda necessitatibus vero
                                cumque quam quae odit nihil facere ab modi, laboriosam"</p>
                            <span>category: {productDetail.data.category}</span>
                            <NavLink to="/">
                                <button className="btn btn-primary" onClick={(e) => e.stopPropagation()}>Go Home
                                </button>
                            </NavLink>
                            <div className="d-flex justify-content-between align-items-center" id="price-container">
                                <h2 id="price"><span>$</span>{productDetail.data.price}</h2>
                                <button className="btn btn-success" onClick={() => {
                                    dispatch(addToCart(productDetail.data));
                                }}>Add to cart
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return <div style={{width : "80%", margin : "80px auto", textAlign : "center"}}>
                <h1>Sản phẩm này không tồn tại</h1>
                <NavLink to="/">
                    <button className="btn btn-primary" >Go Home
                    </button>
                </NavLink>
            </div>;
        }
    };

    return <>{productDetail.requesting ? <div>Loading</div> : renderProducts()}</>;
}

export default ProductDetail;