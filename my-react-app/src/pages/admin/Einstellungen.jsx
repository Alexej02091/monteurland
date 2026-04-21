// src/pages/admin/Einstellungen.jsx

import { useState } from "react";

export default function Einstellungen() {
  const [maintenanceMode, setMaintenanceMode] = useState(false);

  const handleSave = () => {
    alert("Einstellungen gespeichert (Demo)");
  };

  return (
    <div className="col-md-8 mx-auto">
      <h1 className="mb-4">Admin Einstellungen</h1>

      <div className="card p-4">

        <div className="form-check form-switch mb-4">
          <input
            className="form-check-input"
            type="checkbox"
            id="maintenanceMode"
            checked={maintenanceMode}
            onChange={() => setMaintenanceMode(!maintenanceMode)}
          />
          <label className="form-check-label" htmlFor="maintenanceMode">
            Wartungsmodus aktivieren
          </label>
        </div>

        <button className="btn btn-primary w-100" onClick={handleSave}>
          Einstellungen speichern
        </button>

      </div>
    </div>
  );
}
