import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = register(email, password);

    if (success) {
      navigate("/login");
    }
  };

  return (
    <div className="col-md-6 mx-auto">
      <h1 className="mb-4">Registrieren</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">E-Mail</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@example.com"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Passwort</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Registrieren
        </button>
      </form>
    </div>
  );
}
