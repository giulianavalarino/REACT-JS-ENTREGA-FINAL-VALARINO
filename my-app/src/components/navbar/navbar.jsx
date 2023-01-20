import React from "react";
import './styles.css';
import { Link } from "react-router-dom";

const Navbar = ({numbersOfItems = 0, onHandlerCart}) => {
    return(
        <div className="header-menu">
            <Link to={"/itemList"}>
                <div className="header-menu-logo">
                    <h2 className="header-logo">Ecommerce</h2>
                </div>
            </Link>
            <ul>
                <Link to={"/Remeras"}>
                    <li>Remeras</li>
                </Link>
                <Link to={"/Vestidos"}>
                    <li>Vestidos</li>
                </Link>

            </ul>
            <div onClick={onHandlerCart} className="header-menu-cart">
                <img className="header-menu-cart-image" src="https://cdn-icons-png.flaticon.com/512/107/107831.png" alt="cart" />
                <div className="header-manu-cart-container">
                    <span className="header-menu-cart-number">{numbersOfItems}</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar;