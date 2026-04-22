import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import inserate from "../data/inserate";
import { Link } from "react-router-dom";

export default function Favorites() {
  const { favorites } = useContext(FavoritesContext);

  const favInserate = inserate.filter((item) =>
    favorites.includes(item.id)
  );

  return (
    <div>
      <h1 className="mb-4">Meine Favoriten</h1>

      {favInserate.length === 0 && <p>Keine Favoriten gespeichert.</p>}

      <div className="row g-4">
        {favInserate.map((item) => (
          <div key={item.id} className="col-md-4">
            <div className="card h-100">
              <img src={item.image} className="card-img-top" alt={item.title} />
              <div className="card-body">
                <h5>{item.title}</h5>
                <p>
                  <strong>{item.price} €</strong> / Monat<br />
                  {item.location} – {item.rooms} Zimmer
                </p>
                <Link to={`/inserat/${item.id}`} className="btn btn-primary w-100">
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
