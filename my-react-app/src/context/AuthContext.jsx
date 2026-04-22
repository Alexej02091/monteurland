import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // User aus localStorage laden
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (savedUser) setUser(savedUser);
  }, []);

  // Fake Login
  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const found = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!found) {
      alert("Falsche Login-Daten!");
      return false;
    }

    localStorage.setItem("currentUser", JSON.stringify(found));
    setUser(found);
    return true;
  };

  // Fake Registrierung
  const register = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.find((u) => u.email === email)) {
      alert("Benutzer existiert bereits!");
      return false;
    }

    const newUser = {
      email,
      password,
      role: "gesuchter" // Standardrolle
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registrierung erfolgreich!");
    return true;
  };

  const logout = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}
