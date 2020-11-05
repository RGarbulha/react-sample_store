import shoppingCart from "./shopping-cart.svg"

const Cart = (props) =>{

return(
    <div>
        <img src={shoppingCart} alt="cart" style={{width:25, cursor:'pointer'}}/>
    </div>
)


}

export default Cart;