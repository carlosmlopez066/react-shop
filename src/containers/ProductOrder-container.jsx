import React from 'react';
import ProductOrder from '@components/ProductOrder';
import '@styles/ProductOrder-container.scss';
import flechitaIcon from '@icons/flechita.svg'


const ProductOrderContainer = () => {
    return (
        <aside className="ProductOrderContainer">
            <div className="ProductOrder-title-container">
                <img src={flechitaIcon} alt="arrow" />
                <p className="ProductOrder-title">My order</p>
            </div>
            <div className="ProductOrder-my-order-content">
                <ProductOrder />
                <div className="ProductOrder-order">
                    <p>
                        <span>Total</span>
                    </p>
                    <p>$560.00</p>
                </div>
                <button className="ProductOrder-primary-button">
                    Checkout
                </button>

            </div>
        </aside>
    );
}

export default ProductOrderContainer;