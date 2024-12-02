import { Outlet} from "react-router-dom";
import {Fragment, useContext} from "react";
import {default as WWhisper} from '../../assets/WW-BG01SVG.svg';
import {
    NavigationContainer,
    LogoContainer,
    NavLink,
    NavLinks
} from "./NavigationStyles";
import {UserContext} from "../../Context/userContext.jsx";
import CartIcon from "../../components/CartIcon/CartIcon.jsx";
import CartDropdown from "../../components/CartDropdown/CartDropdown.jsx";
import {CartContext} from "../../Context/cartContext.jsx";
import {signOutUser} from "../../Utilities/Firebase/FirebaseUtilities.js";

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <img className='logo' src={WWhisper} alt='WWhisper' />
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>SHOP</NavLink>
                    {currentUser ? (
                        <NavLink as='span' onClick={signOutUser}>
                            SIGN OUT
                        </NavLink>
                    ) : (
                        <NavLink to='/auth'>SIGN IN</NavLink>
                    )}
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;