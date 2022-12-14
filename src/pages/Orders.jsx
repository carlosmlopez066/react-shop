import React from 'react';
import '@styles/Orders.scss'
import flechitaIcon from '@icons/flechita.svg'

const Orders = () => {
    return (
        <div className="Orders">
            <div className="Orders-container">
                <h1 className="title">My orders</h1>

                <div className="Orders-content">
                    <div className="order">
                        <p>
                            <span>03.25.21</span>
                            <span>6 articles</span>
                        </p>
                        <p>$560.00</p>
                        <img src={flechitaIcon} alt="arrow" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;