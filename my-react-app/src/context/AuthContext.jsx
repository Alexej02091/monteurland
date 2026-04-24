import { createContext, useState, useEffect } from "react";
import users from "../data/users";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ---------------------------------------------------------
  // 1. Beim Laden der App: User aus sessionStorage holen
  // ---------------------------------------------------------
  useEffect(() => {
    console.log("Lade User aus sessionStorage...");

    const savedUser = JSON.parse(sessionStorage.getItem("currentUser"));

    if (savedUser) {
      console.log("User in sessionStorage gefunden: ", savedUser);
      setUser(savedUser);
    } else {
      console.log("Kein User in sessionStorage gefunden ");
    }

    setLoading(false);
  }, []);

  // ---------------------------------------------------------
  // 2. LOGIN
  // ---------------------------------------------------------
  const login = (name, password) => {
    console.log("Login-Versuch gestartet...");
    console.log("E-Mail: ", name);
    console.log("Passwort: ", password);

    console.log("Prüfe statische User aus users.js", users);

    let found = users.find(
      (u) => u.name === name && u.password === password
    );

    if (!found) {
      console.log("Login fehlgeschlagen: Benutzer nicht gefunden");
      alert("Falsche Login-Daten!");
      return false;
    }

    console.log("Benutzer gefunden: ", found);

    // User in sessionStorage speichern
    const sessionUser = {
      name: found.name,
      role: found.role,
    };

    sessionStorage.setItem("currentUser", JSON.stringify(sessionUser));
    console.log("User in sessionStorage gespeichert: ", sessionUser);

    // React-State aktualisieren
    setUser(sessionUser);
    console.log("React-State aktualisiert: ", sessionUser);

    return true;
  };

  // ---------------------------------------------------------
  // 3. REGISTRIEREN
  // ---------------------------------------------------------
  const register = () => {
    alert("Registrierung ist deaktiviert — users.js ist statisch.");
    console.log("Registrierung nicht möglich (users.js ist statisch)");
    return false;
  };

  // const register = (name, password) => {
  //   console.log("Registrierungsversuch gestartet...");
  //   console.log("E-Mail: ", name);
  //   console.log("Passwort: ", password);

  //   const users = JSON.parse(localStorage.getItem("users")) || [];
  //   console.log("Users aus localStorage geladen: ", users);

  //   if (users.find((u) => u.name === name)) {
  //     console.log("Registrierung fehlgeschlagen: Benutzer existiert bereits");
  //     alert("Benutzer existiert bereits!");
  //     return false;
  //   }

  //   const newUser = {
  //     name,
  //     password,
  //     role: "gesuchter",
  //   };

  //   users.push(newUser);
  //   localStorage.setItem("users", JSON.stringify(users));

  //   console.log("Neuer Benutzer registriert: ", newUser);
  //   console.log("Users in localStorage gespeichert: ", users);

  //   alert("Registrierung erfolgreich!");
  //   return true;
  // };

  // ---------------------------------------------------------
  // 4. LOGOUT
  // ---------------------------------------------------------
  const logout = () => {
    console.log("Logout gestartet...");

    sessionStorage.removeItem("currentUser");
    console.log("User aus sessionStorage gelöscht");

    setUser(null);
    console.log("React-State zurückgesetzt (user = null)");
  };

  // ---------------------------------------------------------
  // 5. Provider zurückgeben
  // ---------------------------------------------------------
  return (
    <AuthContext.Provider value={{ user, loading, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}
