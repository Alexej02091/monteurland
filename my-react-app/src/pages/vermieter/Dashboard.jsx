// src/pages/vermieter/Dashboard.jsx
export default function Dashboard() {
  return (
    <div>
      <h1 className="mb-4">Vermieter Dashboard</h1>

      <div className="row g-3">

        <div className="col-md-4">
          <div className="card p-3">
            <h5>Inserate</h5>
            <p>Verwalte deine bestehenden Inserate.</p>
            <a href="/vermieter/inserat-erstellen" className="btn btn-primary">
              Neues Inserat erstellen
            </a>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3">
            <h5>Buchungen</h5>
            <p>Sieh dir aktuelle und vergangene Buchungen an.</p>
            <a href="/vermieter/buchungen" className="btn btn-secondary">
              Buchungen ansehen
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
