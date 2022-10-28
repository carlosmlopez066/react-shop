import React, { useState } from 'react';
import '@styles/ProductList.scss'
import addToCart from '@icons/bt_add_to_cart.svg'

const ProductList = ({ product }) => {
    const [cart, setCart] = useState([]) //Como parametro en useState puede ir un string,un número, un booleanos o un arraglo

    const handleClick = () => {
        setCart([]);
    }
    return (
        <div className="product-card">
            <img src={product.images[0]} alt={product.title} />
            <div className="product-info">
                <div>
                    <p>${product.price}</p>
                    <p>{product.title}</p>
                </div>
                <figure onClick={handleClick}>
                    <img src={addToCart} alt="" />
                </figure>
            </div>
        </div>
    );
};

export default ProductList;