import React, {useEffect} from 'react';
import Products from "../../components/Products/Products.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import {useDispatch, useSelector} from "react-redux";
import {setLocalStorage} from "../../utils/localStorage.js";
import Pagination from "../../components/Products/component/Pagination.jsx";

function Home(props) {
    const dispatch = useDispatch();

    // console.log('Homrender');
    return (
        <>
            <Products/>
            <div style={{transform: "translate(-50%)" ,left: "50%",position: "relative", width : 'fit-content'}}><Pagination/></div>

        </>
    );
}

export default Home;