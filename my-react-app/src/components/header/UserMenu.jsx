import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

export default function UserMenu({ user, mobile = false }) {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  // WICHTIG: Erst prüfen, ob user existiert!
  if (!user) {
    return (
      <a
        href="/login"
        className={mobile ? "btn btn-primary w-100" : "btn btn-outline-primary"}
      >
        Login
      </a>
    );
  }

  // Jetzt ist user garantiert NICHT null → jetzt dürfen wir user.role lesen
  const profileLink =
    user.role === "gesuchter"
      ? "/gesuchter/profile"
      : user.role === "vermieter"
      ? "/vermieter/dashboard"
      : user.role === "admin"
      ? "/admin"
      : "/";

  // Mobile Version
  if (mobile) {
    return (
      <div>
        <p className="fw-bold mb-2">{user.email}</p>
        <a href={profileLink} className="d-block mb-3">Profil</a>

        <button onClick={handleLogout} className="btn btn-danger w-100">
          Logout
        </button>
      </div>
    );
  }

  // Desktop Version
  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary">
        {user.email}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href={profileLink}>Profil</Dropdown.Item>
        <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
