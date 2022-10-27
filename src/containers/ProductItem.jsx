import React from 'react';
import ProductDetail from '../components/ProductDetail';
import '../styles/ProductItem.scss';

const ProductItem = () => {
    return (
        <aside className="ProductItem">
            <div className="ProductItem-close">
                <img src="./icons/icon_close.png" alt="close" />
            </div>
            <ProductDetail />
        </aside>
    );
}

export default ProductItem;