import React, { useState } from 'react';
import '@styles/ProductList.scss'
import addToCart from '@icons/bt_add_to_cart.svg'

const ProductList = () => {
    const [cart, setCart] = useState([]) //Como parametro en useState puede ir un string,un número, un booleanos o un arraglo

    const handleClick = () => {
        setCart([]);
    }
    return (
        <div className="product-card">
            <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
            <div className="product-info">
                <div>
                    <p>$120,00</p>
                    <p>Bike</p>
                </div>
                <figure onClick={handleClick}>
                    <img src={addToCart} alt="" />
                </figure>
            </div>
        </div>
    );
};

export default ProductList;