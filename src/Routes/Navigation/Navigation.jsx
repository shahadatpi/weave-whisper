import {Link, Outlet} from "react-router-dom";
import {Fragment} from "react";
import {default as WWhisper} from '../../assets/WW-BG01SVG.svg';
import './NavigationStyles.scss';

const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation">
                <Link className={'logo-container'} to={'/'}>
                     <img className={'logo'} src={WWhisper} alt="Crown Logo"/>
                </Link>
                <div className={'nav-links-container'}>
                    <Link className={'nav-link'} to='/shop'>SHOP</Link>
                    <Link className={'nav-link'} to='/signin'>SIGNIN</Link>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    );
};

export default Navigation;
