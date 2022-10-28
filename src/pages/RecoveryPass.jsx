import React from 'react';
import '@styles/RecoveryPass.scss';
import logoYard from '@logos/logo_yard_sale.svg';
import emailIcon from '@icons/email.svg';



const RecoveryPass = () => {
    return (
        <div className="RecoveryPass">
            <div className="form-container">
                <img src={logoYard} alt="logo" className="logo" />

                <h1 className="title">Email has been sent!</h1>
                <p className="subtitle">Please check your inbox for instructions on how to reset the password</p>

                <div className="email-image">
                    <img src={emailIcon} alt="email" />
                </div>

                <button className="primary-button RecoveryPass-button">Login</button>

                <p className="resend">
                    <span>Didn't receive the email?</span>
                    <a href="/">Resend</a>
                </p>
            </div>
        </div>

    );
};

export default RecoveryPass;