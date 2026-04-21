import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState("guest");

  // Beim Laden: Daten aus localStorage holen
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    const savedRole = localStorage.getItem("role");

    if (savedUser) setUser(JSON.parse(savedUser));
    if (savedRole) setRole(savedRole);
  }, []);

  // Login-Funktion
  const login = (email, password) => {
    // Beispiel: Fake-Login
    // Später ersetzt du das durch API-Call

    // Beispiel: Rolle anhand der E-Mail bestimmen
    let detectedRole = "gesuchter";

    if (email === "vermieter@test.de") detectedRole = "vermieter";
    if (email === "admin@test.de") detectedRole = "admin";

    const loggedUser = { email };

    setUser(loggedUser);
    setRole(detectedRole);

    localStorage.setItem("user", JSON.stringify(loggedUser));
    localStorage.setItem("role", detectedRole);

    return true;
  };

  // Logout-Funktion
  const logout = () => {
    setUser(null);
    setRole("guest");
    localStorage.removeItem("user");
    localStorage.removeItem("role");
  };

  return (
    <AuthContext.Provider value={{ user, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
