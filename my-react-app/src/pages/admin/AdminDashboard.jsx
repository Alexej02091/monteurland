// src/pages/admin/AdminDashboard.jsx

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="mb-4">Admin Dashboard</h1>

      <div className="row g-3">

        <div className="col-md-4">
          <div className="card p-3">
            <h5>Benutzerverwaltung</h5>
            <p>Verwalte alle registrierten Benutzer.</p>
            <a href="/admin/users" className="btn btn-primary">
              Benutzer anzeigen
            </a>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3">
            <h5>System Logs</h5>
            <p>Überwache Systemaktivitäten und Fehler.</p>
            <a href="/admin/logs" className="btn btn-secondary">
              Logs ansehen
            </a>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3">
            <h5>Einstellungen</h5>
            <p>Systemweite Konfigurationen verwalten.</p>
            <a href="/admin/settings" className="btn btn-dark">
              Einstellungen öffnen
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
