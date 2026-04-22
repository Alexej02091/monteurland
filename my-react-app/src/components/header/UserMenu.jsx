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

  // Wenn kein User eingeloggt ist → Login anzeigen
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

  // Mobile Version (kein Dropdown)
  if (mobile) {
    return (
      <div>
        <p className="fw-bold mb-2">{user.email}</p>
        <a href="/profile" className="d-block mb-3">Profil</a>

        <button onClick={handleLogout} className="btn btn-danger w-100">
          Logout
        </button>
      </div>
    );
  }

  // Desktop Version (Dropdown)
  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary">
        {user.email}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/profile">Profil</Dropdown.Item>
        <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
