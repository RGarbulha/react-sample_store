import {useState} from "react"

import shoppingCart from "./shopping-cart.svg"

import './cart.css'

const Cart = (props) =>{

    const [menuState, setMenuState] = useState(false)

    const menuHandler = () =>{
        setMenuState(!menuState)
    }



return(
    <>
    <div>
        <img src={shoppingCart} alt="cart" style={{width:25, cursor:'pointer'}} onClick={menuHandler}/>
    </div>
    <div className={menuState?'cart-display':'cart-display cart-inactive'}>

    </div>
    </>
)


}

export default Cart;