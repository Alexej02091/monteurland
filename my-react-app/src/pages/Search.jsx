import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { useState } from "react";
import inserate from "../data/inserate";
import { Link } from "react-router-dom";

export default function Search() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [rooms, setRooms] = useState("");

  const { toggleFavorite, isFavorite } = useContext(FavoritesContext);

  const filtered = inserate.filter((item) => {
    return (
      item.title.toLowerCase().includes(query.toLowerCase()) &&
      (location ? item.location === location : true) &&
      (maxPrice ? item.price <= Number(maxPrice) : true) &&
      (rooms ? item.rooms === Number(rooms) : true)
    );
  });

  return (
    <div>
      <h1 className="mb-4">Wohnungen suchen</h1>

      {/* Suchfelder */}
      <div className="row g-3 mb-4">

        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Titel oder Stichwort..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="col-md-3">
          <select
            className="form-select"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">Ort wählen</option>
            <option value="Hamburg">Hamburg</option>
            <option value="Berlin">Berlin</option>
            <option value="München">München</option>
          </select>
        </div>

        <div className="col-md-3">
          <input
            type="number"
            className="form-control"
            placeholder="Max. Preis"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>

        <div className="col-md-2">
          <select
            className="form-select"
            value={rooms}
            onChange={(e) => setRooms(e.target.value)}
          >
            <option value="">Zimmer</option>
            <option value="1">1 Zimmer</option>
            <option value="2">2 Zimmer</option>
            <option value="3">3 Zimmer</option>
          </select>
        </div>

      </div>

      {/* Ergebnisse */}
      <div className="row g-4">
        {filtered.length === 0 && <p>Keine Treffer gefunden.</p>}

        {filtered.map((item) => (
          <div key={item.id} className="col-md-4">
            <div className="card h-100">

              <img
                src={item.image}
                className="card-img-top"
                alt={item.title}
              />

              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">
                  <strong>{item.price} €</strong> / Monat<br />
                  {item.location} – {item.rooms} Zimmer
                </p>

                <buuton
                  className="btn btn-outline-danger w-100 mb-2"
                  onClick={() => toggleFavorite(item.id)}
                  >
                    {isFavorite(item.id) ? "❤️ Entfernen" : "🤍 Favorit"}
                  </buuton>
                  
                <Link
                  to={`/inserat/${item.id}`}
                  className="btn btn-primary w-100"
                >
                  Details ansehen
                </Link>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
