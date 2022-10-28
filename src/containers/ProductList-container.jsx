import React from 'react';
import ProductList from '@components/ProductList';
import '@styles/ProductList-container.scss';

const ProductListContainer = () => {
    return (
        <section className="main-container">
            <div className="ProductList">
                <ProductList />
            </div>
        </section>
    );
}

export default ProductListContainer;