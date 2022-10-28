import React, { useEffect, useState } from 'react';
import ProductList from '@components/ProductList';
import '@styles/ProductList-container.scss';
import axios from 'axios';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductListContainer = () => {
    const [products, setproducts] = useState([]);

    useEffect(async () => {
        const response = await axios(API);
        setproducts(response.data);
    }, [])

    return (
        <section className="main-container">
            <div className="ProductList">
                {products.map(product => (
                    <ProductList />
                ))}
            </div>
        </section>
    );
}

export default ProductListContainer;