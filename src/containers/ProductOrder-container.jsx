import React from 'react';
import ProductOrder from '../components/ProductOrder';
import '../styles/ProductOrderContainer.scss';

const ProductOrderContainer = () => {
    return (
        <aside className="ProductOrderContainer">
            <div className="title-container">
                <img src="./icons/flechita.svg" alt="arrow" />
                <p className="title">My order</p>
            </div>
            <div className="my-order-content">
                <ProductOrder />
                <div className="order">
                    <p>
                        <span>Total</span>
                    </p>
                    <p>$560.00</p>
                </div>
                <button className="primary-button">
                    Checkout
                </button>
            </div>
        </aside>
    );
}

export default ProductOrderContainer;