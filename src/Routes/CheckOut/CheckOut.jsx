import './CheckOutStyles.scss';
import {useContext} from "react";
import {CartContext} from "../../Context/cartContext.jsx";
import CheckOutItem from "../../components/CheckOutItem/CheckOutItem.jsx";

const CheckOut = () => {
    const {cartItems, addItemToCart, removeItemToCart} = useContext(CartContext);
    return (
        <div className={'checkout-container'}>
            <div className={'checkout-header'}>
                <div className={'header-block'}>
                    <span>Product</span>
                </div>
                <div className={'header-block'}>
                    <span>Description</span>
                </div>
                <div className={'header-block'}>
                    <span>Quantity</span>
                </div>
                <div className={'header-block'}>
                    <span>Price</span>
                </div>
                <div className={'header-block'}>
                    <span>Remove</span>
                </div>
            </div>

            {cartItems.map((cartItem) => {
                return (
                  <CheckOutItem key={cartItem.id} cartItem={cartItem} />
                );
            })}
            <span className={'total'}>Total:0</span>
        </div>
    );
};

export default CheckOut;