export default function UserMenu({ user, mobile = false }) {
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

  if (mobile) {
    return (
      <div>
        <p className="fw-bold mb-2">{user.email}</p>
        <a href="/profile" className="d-block mb-3">Profil</a>
        <a href="/logout" className="btn btn-danger w-100">Logout</a>
      </div>
    );
  }

  return (
    <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown">
        {user.email}
      </button>

      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="/profile">Profil</a></li>
        <li><a className="dropdown-item" href="/logout">Logout</a></li>
      </ul>
    </div>
  );
}
