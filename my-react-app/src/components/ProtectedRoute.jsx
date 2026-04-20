import { Navigate } from "react-router-dom";
const ProtectedRoute = ( { children }) => {
    const istAutenticated = localStorage.getItem("auth") === "true";

    return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;