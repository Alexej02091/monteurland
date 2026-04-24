// src/layouts/MainLayout.jsx
import { useAuth } from "../hooks/useAuth";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export default function MainLayout({ children }) {
  const { user, role } = useAuth(); // z.B. role = "guest" | "gesuchter" | "vermieter" | "admin"

  return (
    <div className="app-container">
      <Header role={role} user={user} />

      <main className="content">
        {children}
      </main>

      <Footer />

    </div>
  );
}
