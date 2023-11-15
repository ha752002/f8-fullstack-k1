import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import icon from "../../assets/iconNavbar/icon.ico"
import CartButton from "../../pages/CartPage/components/CartButton.jsx";
import {NavLink} from "react-router-dom";

function Navbar() {
    console.log('renderNavbar')
    return (
        <nav id="navbar-container" className="navbar navbar-light  justify-content-between"
             style={{backgroundColor: "#252b48"}}>
            <div className="container">
                <a className="navbar-brand">
                    <NavLink to="/">
                        <img src={icon} id="icon-in-div" width="40" alt="icon"/>
                        <span style={{color: "white"}}> Hongg Ha Shop</span>
                    </NavLink>

                </a>

                <CartButton/>
            </div>
        </nav>
    );
}

export default Navbar;
