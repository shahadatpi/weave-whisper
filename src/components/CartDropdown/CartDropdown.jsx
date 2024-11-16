import './CartDropdown.scss';
import Button from "../Button/buttonComponent.jsx";
import {useContext} from "react";
import {CartContext} from "../../Context/cartContext.jsx";
import CartItem from "../CartItem/CartItem.jsx";
import {useNavigate} from "react-router-dom";
const CartDropdown = () => {
    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();
    const goToCheckout = () => {
        navigate("/checkout");
    }
    return (
        <div className={'cart-dropdown-container'}>
            <div className={'cart-items'}>
                {cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)}
            </div>
            <Button onClick={goToCheckout}>Go to Checkouts</Button>
        </div>
    );
};

export default CartDropdown;
