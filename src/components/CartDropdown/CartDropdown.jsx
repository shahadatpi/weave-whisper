import './CartDropdownStyles';
import Button from "../Button/buttonComponent.jsx";
import {useContext} from "react";
import {CartContext} from "../../Context/cartContext.jsx";
import CartItem from "../CartItem/CartItem.jsx";
import {useNavigate} from "react-router-dom";
import {CartDropdownContainer, CartItems, EmptyMessage} from "./CartDropdownStyles.jsx";
const CartDropdown = () => {
    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();
    const goToCheckout = () => {
        navigate("/checkout");
    }
    return (
        <CartDropdownContainer>
            <CartItems>
                { cartItems.length ? (cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)) :
                    (<EmptyMessage>Your Cart is empty!</EmptyMessage>)}
            </CartItems>
            <Button onClick={goToCheckout}>Go to Checkouts</Button>
        </CartDropdownContainer>
    );
};

export default CartDropdown;
