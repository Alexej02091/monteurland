import inserate from "../data/inserate";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1 className="mb-4">Aktuelle Inserate</h1>

      <div className="row g-4">
        {inserate.map((item) => (
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
                  {item.location}
                </p>

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
