import {Link, Outlet} from "react-router-dom";
import {Fragment, useContext} from "react";
import {default as WWhisper} from '../../assets/WW-BG01SVG.svg';
import './NavigationStyles.scss';
import {UserContext} from "../../Context/userContext.jsx";
import CartIcon from "../../components/CartIcon/CartIcon.jsx";
import CartDropdown from "../../components/CartDropdown/CartDropdown.jsx";
import {CartContext, CartProvider} from "../../Context/cartContext.jsx";

const Navigation = () => {
    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);

    return (
        <Fragment>
            <div className="navigation">
                <Link className={'logo-container'} to={'/'}>
                     <img className={'logo'} src={WWhisper} alt="Crown Logo"/>
                </Link>
                <div className={'nav-links-container'}>
                    <Link className={'nav-link'} to='/shop'>SHOP</Link>
                    {
                        currentUser ? (<span  className={'nav-link'}>Sign Out</span>) :
                            (<Link className={'nav-link'} to='/auth'>Sign In</Link>)
                    }
                    <CartIcon/>
                </div>
                {isCartOpen && <CartDropdown/>}
            </div>
            <Outlet/>
        </Fragment>
    );
};

export default Navigation;
