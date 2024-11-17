import './CheckOutItemStyles.scss';
import {useContext} from "react";
import {CartContext} from "../../Context/cartContext.jsx";
// eslint-disable-next-line react/prop-types
const CheckOutItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    const {clearItemFromCart, addItemToCart, removeItemToCart} = useContext(CartContext);
    const clearItemHandler = ()=> clearItemFromCart(cartItem);
    const addItemHandler = ()=> addItemToCart(cartItem);
    const removeItemHandler = ()=> removeItemToCart(cartItem);

    return (
        <div className={'checkout-item-container'}>
            <div className={'image-container'}>
                <img src={imageUrl} alt={`${name}`}/>
            </div>
            <span className={'name'}>{name}</span>
            <span className={'quantity'}>
                <div className={'arrow'} onClick={removeItemHandler}>&#10094;</div>
                {quantity}
                <div className={'arrow'} onClick={addItemHandler}>&#10095;</div>
            </span>
            <span className={'price'}>{quantity*price}</span>
            <div className={'remove-button'} onClick={clearItemHandler}>&#10005;</div>
        </div>
    );
};

export default CheckOutItem;

