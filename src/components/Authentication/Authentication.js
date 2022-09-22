import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { validCredentials } from '../../constants/validCredentials';
import './authentication.css';

const Authentication = () => {

    const { setAuth } = useAuth();

    const handleSubmit = (e) => {

    };

    return (
        <div className="auth-div">
            <form onSubmit={handleSubmit} className="auth-form">
                <h1>MordOS</h1>
                <input type="email" placeholder="Email" className="auth-email" />
                <input type="password" placeholder="Password" className="auth-password" />

                <button className="auth-button">Log In</button>
            </form>
        </div>
    )
};

export default Authentication;