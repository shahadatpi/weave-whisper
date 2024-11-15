import {default as ShoppingICon} from "../../assets/shopping-bag.svg";
import './CartIcon.scss';
import {useContext} from "react";
import {CartContext} from "../../Context/cartContext.jsx";
const CartIcon = () => {
    const {isCartOpen, setIsCartOpen} = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
    return (
        <div className={'cart-icon-container'} onClick={toggleIsCartOpen}>
            <img src={ShoppingICon} alt="ShoppingICon" className={'shopping-icon'} />
            <span className={'item-count'}>0</span>
        </div>
    );
};

export default CartIcon;
