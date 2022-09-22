import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { validCredentials } from '../../constants/validCredentials';
import './authentication.css';

const Authentication = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { auth, setAuth, setAuthenticated } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === validCredentials.email && password === validCredentials.password) {
            setAuth({ email, password });
            setAuthenticated(true);
            localStorage.setItem('userCredentials', JSON.stringify({ email, password }));
        }
    };

    return (
        <div className="auth-div">
            <form onSubmit={handleSubmit} className="auth-form">
                <h1>MordOS</h1>
                <input type="email" placeholder="Email" className="auth-email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" className="auth-password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <button className="auth-button">Log In</button>
            </form>
        </div>
    )
};

export default Authentication;