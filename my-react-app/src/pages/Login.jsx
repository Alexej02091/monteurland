import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        localStorage.setItem("auth", "true");
        navigate("/dashboard");
    };

    return (
        <div className="container py-5" style={{ maxWidth: "500px "}}>
            <h1 className="mb-4">Login</h1>
            <div className="card p-4 chadow-sm">
                <button className="btn btn-primary w-100" onClick={handleLogin}>
                    Einloggen
                </button>
            </div>
        </div>
    );
};

export default Login;