// src/pages/gesuchter/Favoriten.jsx

import { useEffect, useState } from "react";

export default function Favoriten() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Fake-Daten (später API)
    const fakeFavorites = [
      { id: 1, title: "Moderne Wohnung in Hamburg", price: 1200 },
      { id: 2, title: "Gemütliches Apartment", price: 950 }
    ];

    setFavorites(fakeFavorites);
  }, []);

  return (
    <div>
      <h1 className="mb-4">Meine Favoriten</h1>

      {favorites.length === 0 && <p>Keine Favoriten gespeichert.</p>}

      <div className="row g-3">
        {favorites.map((fav) => (
          <div key={fav.id} className="col-md-4">
            <div className="card p-3">
              <h5>{fav.title}</h5>
              <p>{fav.price} € / Monat</p>
              <a href={`/inserat/${fav.id}`} className="btn btn-outline-primary">
                Anzeigen
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
