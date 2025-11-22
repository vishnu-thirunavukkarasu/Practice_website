import React, { useState } from "react";
import { loginUser } from "../api/authApi";
import { useNavigate } from "react-router-dom";


const Login: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const result = await loginUser({ email, password });
        setMessage(result);
        if (result === "Login successful!") {
            // ✅ Store login state in browser storage
            localStorage.setItem("isLoggedIn", "true");

            // ✅ Redirect to home page
            navigate("/home");
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <div className="input-grp">
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required

                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required

                    />
                    <button className="loginsignupbtn" type="submit">Login</button>
                    <button className="loginsignupbtn" type="button" onClick={() => navigate("/signup")}>Sign Up</button>
                </form>
            </div>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Login;
