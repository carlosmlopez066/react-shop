import React, { useContext } from 'react';
import '@styles/ProductList.scss'
import Appcontext from '@context/AppContext';
import addToCartIcon from '@icons/bt_add_to_cart.svg'

const ProductList = ({ product }) => {
    const { addToCart } = useContext(Appcontext);

    const handleClick = item => {
        addToCart(item);
    }
    return (
        <div className="product-card">
            <img src={product.images[0]} alt={product.title} />
            <div className="product-info">
                <div>
                    <p>${product.price}</p>
                    <p>{product.title}</p>
                </div>
                <figure onClick={() => handleClick(product)}>
                    <img src={addToCartIcon} alt="" />
                </figure>
            </div>
        </div>
    );
};

export default ProductList;