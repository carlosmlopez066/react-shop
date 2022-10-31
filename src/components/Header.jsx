import React, { useState, useContext } from 'react';
import '@styles/Header.scss';

import DesktopMenu from '@components/DesktopMenu';
import menu from '@icons/icon_menu.svg';
import ProductOrderContainer from '@containers/ProductOrder-container';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import AppContext from '@context/AppContext'


const Header = () => {//[valor del estado] useState(modifica al valor del estado)
    const [toggle, setToggle] = useState(false);
    const { state } = useContext(AppContext);
    const [toggleOrders, setToggleOrder] = useState(false);
    const handleToggle = () => {
        setToggle(!toggle);
    }


    return (
        <nav>
            <img src={menu} alt="menu" className="menu" />
            <div className="navbar-left">
                <img src={logo} alt="logo" className="nav-logo" />
                <ul>
                    <li>
                        <a href="/">All</a>
                    </li>
                    <li>
                        <a href="/">Clothes</a>
                    </li>
                    <li>
                        <a href="/">Electronics</a>
                    </li>
                    <li>
                        <a href="/">Furnitures</a>
                    </li>
                    <li>
                        <a href="/">Toys</a>
                    </li>
                    <li>
                        <a href="/">Others</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-email" onClick={handleToggle}>
                        platzi@example.com
                    </li>
                    <li className="navbar-shopping-cart"
                        onClick={() => setToggleOrder(!toggleOrders)}
                    >
                        <img src={shoppingCart} alt="shopping cart" />
                        {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
                    </li>
                </ul>
            </div>
            {/* si toggle es false, no se muentra el menu, pero si el estado cambia a verdarero muentras desktopmenu  */}
            {toggle && <DesktopMenu />}
            {toggleOrders && <ProductOrderContainer />}
        </nav>

    );
};

export default Header;