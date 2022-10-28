import React from 'react';
import ProductDetail from '@components/ProductDetail';
import '@styles/ProductItem.scss';
import iconClose from '@icons/icon_close.png';

const ProductItem = () => {
    return (
        <aside className="ProductItem">
            <div className="ProductItem-close">
                <img src={iconClose} alt="close" />
            </div>
            <ProductDetail />
        </aside>
    );
}

export default ProductItem;