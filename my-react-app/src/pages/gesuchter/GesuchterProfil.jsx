// src/pages/gesuchter/GesuchterProfil.jsx

import { useState } from "react";

export default function GesuchterProfil() {
  const [name, setName] = useState("Max Mustermann");
  const [email, setEmail] = useState("max@test.de");
  const [bio, setBio] = useState("Ich suche eine Wohnung in Hamburg.");

  const handleSave = () => {
    alert("Profil gespeichert (Demo)");
  };

  return (
    <div className="col-md-8 mx-auto">
      <h1 className="mb-4">Mein Profil</h1>

      <div className="card p-4">

        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">E-Mail</label>
          <input
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Über mich</label>
          <textarea
            className="form-control"
            rows="4"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          ></textarea>
        </div>

        <button className="btn btn-primary w-100" onClick={handleSave}>
          Speichern
        </button>

      </div>
    </div>
  );
}
