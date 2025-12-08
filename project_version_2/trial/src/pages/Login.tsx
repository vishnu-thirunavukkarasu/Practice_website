import React, { useState } from "react";
import { loginUser } from "../api/authApi";
import { useNavigate } from "react-router-dom";
import Loader from "../components/ui/loader";


const Login: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        const result = await loginUser({ email, password });
        setMessage(result);

        if (result === "Login successful!") {
            // ✅ Store login state in browser storage
            localStorage.setItem("isLoggedIn", "true");
            setTimeout(() => {
                setIsLoading(false);
                navigate("/home");
            }, 1500);
            // ✅ Redirect to home page
            // navigate("/home");
        } else {
            setIsLoading(false);
        }
    };


    return (
        <>
            <Loader isLoading={isLoading} />
            <div className="login-signup-page">
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
            </div>
        </>
    );
};

export default Login;
