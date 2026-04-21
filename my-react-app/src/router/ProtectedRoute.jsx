// src/router/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function ProtectedRoute({ children, role }) {
  const { user, role: userRole } = useAuth();

  // 1. Nicht eingeloggt → Login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // 2. Rollenprüfung
  if (role) {
    // Wenn mehrere Rollen erlaubt sind
    if (Array.isArray(role)) {
      if (!role.includes(userRole)) {
        return <Navigate to="/unauthorized" replace />;
      }
    } 
    // Wenn nur eine Rolle erlaubt ist
    else {
      if (userRole !== role) {
        return <Navigate to="/unauthorized" replace />;
      }
    }
  }

  // 3. Zugriff erlaubt
  return children;
}
