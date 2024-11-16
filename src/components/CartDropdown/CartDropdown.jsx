import './CartDropdown.scss';
import Button from "../Button/buttonComponent.jsx";
import {useContext} from "react";
import {CartContext} from "../../Context/cartContext.jsx";
import CartItem from "../CartItem/CartItem.jsx";
const CartDropdown = () => {
    const {cartItems} = useContext(CartContext);
    return (
        <div className={'cart-dropdown-container'}>
            <div className={'cart-items'}>
                {cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)}
                {console.log(cartItems)}
            </div>
            <Button>Go to Checkouts</Button>
        </div>
    );
};

export default CartDropdown;
