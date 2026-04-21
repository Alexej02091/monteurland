// src/components/header/RoleNavigation/AdminNav.jsx
export default function AdminNav() {
  return (
    <nav className="me-3">
      <a href="/admin" className="me-3">Dashboard</a>
      <a href="/admin/users" className="me-3">Benutzer</a>
      <a href="/admin/logs" className="me-3">Logs</a>
      <a href="/admin/settings">Einstellungen</a>
    </nav>
  );
}
