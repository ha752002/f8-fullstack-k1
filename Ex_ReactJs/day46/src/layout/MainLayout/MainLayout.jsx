import React from 'react';
import {Outlet} from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar.jsx";

function MainLayout(props) {
    return (

        <>
            <Navbar/>
            <div><Outlet/></div>
        </>
    );
}

export default MainLayout;