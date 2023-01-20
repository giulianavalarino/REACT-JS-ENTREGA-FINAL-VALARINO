import React from "react";
import './styles.css';
import { Link } from "react-router-dom";

const Cart = () => {
    return(
        <div className="container">
            <h2>Cart</h2>
            <div>
                <Link to='/itemList'>Seguir comprando</Link>
            </div>
        </div>
    );
}

export default Cart;