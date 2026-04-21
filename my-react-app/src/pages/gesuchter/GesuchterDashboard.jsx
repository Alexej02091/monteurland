// src/pages/gesuchter/GesuchterDashboard.jsx

export default function GesuchterDashboard() {
  return (
    <div>
      <h1 className="mb-4">Gesuchter Dashboard</h1>

      <div className="row g-3">

        <div className="col-md-4">
          <div className="card p-3">
            <h5>Profil</h5>
            <p>Bearbeite deine persönlichen Daten.</p>
            <a href="/gesuchter/profile" className="btn btn-primary">
              Profil öffnen
            </a>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3">
            <h5>Favoriten</h5>
            <p>Deine gespeicherten Inserate.</p>
            <a href="/gesuchter/favoriten" className="btn btn-secondary">
              Favoriten ansehen
            </a>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3">
            <h5>Anfragen</h5>
            <p>Verwalte deine gesendeten Anfragen.</p>
            <a href="/gesuchter/anfragen" className="btn btn-dark">
              Anfragen öffnen
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
