import React from "react";
import '@styles/NewPass.scss';


const NewPass = () => {
    return (
        <div className="NewPass">
            <div className="form-container">
                <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
                <h1 className="title">Create a new password</h1>
                <p className="subtitle">Enter a new passwrd for yue account</p>
                <form action="/" className="form" >
                    <label for="password" className="label">Password</label>
                    <input type="password" id="password" placeholder="*********" className="input input-password" />
                    <label for="new-password" className="label">Password</label>
                    <input type="password" id="new-password" placeholder="*********" className="input input-password" />
                    <input type="submit" value="Confirm" className="primary-button NewPass-button" />
                </form>
            </div>
        </div>

    );
};

export default NewPass;