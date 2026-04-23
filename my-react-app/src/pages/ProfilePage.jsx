import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function ProfilePage() {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <p>Du musst eingeloggt sein, um dein Profil zu sehen.</p>;
  }

  return (
    <div className="container py-4">
      <h1>Profil</h1>

      <div className="card mt-4">
        <div className="card-body">
          <h5 className="card-title">Benutzerinformationen</h5>

          <p><strong>Email:</strong> {user.email}</p>

          {user.role && (
            <p><strong>Rolle:</strong> {user.role}</p>
          )}

          {user.createdAt && (
            <p><strong>Registriert seit:</strong> {user.createdAt}</p>
          )}

          <a href="/profile/edit" className="btn btn-primary mt-3">
            Profil bearbeiten
          </a>
        </div>
      </div>
    </div>
  );
}
