import { useState, useEffect } from "react"

import shoppingCart from "./shopping-cart.svg"

import './cart.css'

const Cart = (props) => {

    var menuState = props.cart.menuState

    useEffect(() => {
    }, [menuState])

    return (
        <>
            <div>
                <img src={shoppingCart} alt="cart" style={{ width: 25, cursor: 'pointer' }} onClick={props.cart.menuHandler} />
            </div>
            <div className={menuState ? 'cart-display' : 'cart-display cart-inactive'}>

            </div>
        </>
    )


}

export default Cart;