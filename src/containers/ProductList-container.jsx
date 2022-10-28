import React from 'react';
import ProductList from '@components/ProductList';
import '@styles/ProductList-container.scss';
import useGetProducts from '@hooks/useGetProducts.js';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductListContainer = () => {
    const products = useGetProducts(API);
    return (
        <section className="main-container">
            <div className="ProductList">
                {products.map(product => (
                    <ProductList product={product} key={product.id} />
                ))}
            </div>
        </section>
    );
}

export default ProductListContainer;