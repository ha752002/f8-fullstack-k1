import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import icon from "../../assets/iconNavbar/icon.ico"
import CartButton from "../../pages/CartPage/components/CartButton.jsx";

function Navbar() {
    return (
        <nav id="navbar-container" className="navbar navbar-light  justify-content-between" style={{backgroundColor: "#252b48"}}>
            <div className="container">
                <a className="navbar-brand">
                    <img src={icon} id="icon-in-div" width="40" alt="icon"/>
                </a>

               <CartButton />
            </div>
        </nav>
    );
}

export default Navbar;
