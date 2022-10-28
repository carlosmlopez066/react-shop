import React from 'react';
import ProductOrder from '@components/ProductOrder';
import '@styles/ProductOrderContainer.scss';
import flechitaIcon from '@icons/flechita.svg'


const ProductOrderContainer = () => {
    return (
        <aside className="ProductOrderContainer">
            <div className="title-container">
                <img src={flechitaIcon} alt="arrow" />
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