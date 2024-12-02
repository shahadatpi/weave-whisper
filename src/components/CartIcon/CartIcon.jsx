import './CartIconStyles.jsx';
import {useContext} from "react";
import {default as svgCartIcon} from "../../assets/shopping-bag.svg";
import {CartContext} from "../../Context/cartContext.jsx";
import {CartIconContainer, CartIconSvg, ItemCount} from "./CartIconStyles.jsx";
const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <CartIconSvg src={svgCartIcon}  />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;
