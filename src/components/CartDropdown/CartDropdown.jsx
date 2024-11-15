import './CartDropdown.scss';
import Button from "../Button/buttonComponent.jsx";
const CartDropdown = () => {
    return (
        <div className={'cart-dropdown-container'}>
            <div className={'cart-items'}>

            </div>
            <Button>Go to Checkouts</Button>
        </div>
    );
};

export default CartDropdown;
