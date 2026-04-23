import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export function useAuth() {
  const { user, loading, login, logout, register } = useContext(AuthContext);

  return {
    user,
    loading,
    login,
    logout,
    register,
    role: user?.role || null
  };
}

