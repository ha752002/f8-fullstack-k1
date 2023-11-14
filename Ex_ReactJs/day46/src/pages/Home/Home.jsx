import React, {useEffect} from 'react';
import Products from "../../components/Products/Products.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import {useDispatch, useSelector} from "react-redux";
import {setLocalStorage} from "../../utils/localStorage.js";

function Home(props) {
    const dispatch = useDispatch();

    // console.log('Homrender');
    return (
        <>
            <Products/>
        </>
    );
}

export default Home;