// src/pages/vermieter/InseratBearbeiten.jsx
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function InseratBearbeiten() {
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    // Fake-Daten (später API)
    const fakeData = {
      title: "Beispiel-Inserat",
      price: 1200,
      description: "Schöne Wohnung im Zentrum."
    };

    setTitle(fakeData.title);
    setPrice(fakeData.price);
    setDescription(fakeData.description);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Bearbeitetes Inserat:", {
      id,
      title,
      price,
      description
    });

    alert("Inserat wurde gespeichert (Demo)");
  };

  return (
    <div className="col-md-8 mx-auto">
      <h1 className="mb-4">Inserat bearbeiten</h1>
      <p className="text-muted">Inserat-ID: {id}</p>

      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <label className="form-label">Titel</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Preis (€/Monat)</label>
          <input
            type="number"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Beschreibung</label>
          <textarea
            className="form-control"
            rows="5"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Änderungen speichern
        </button>
      </form>
    </div>
  );
}
