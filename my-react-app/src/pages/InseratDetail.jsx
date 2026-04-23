import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function InseratDetail() {
  const { id } = useParams();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fake-Daten (später API)
  useEffect(() => {
    setLoading(true);

    const fakeInserat = {
      id,
      title: "Moderne Wohnung im Zentrum",
      price: 1200,
      description:
        "Helle, moderne Wohnung im Herzen der Stadt. Perfekt für Singles oder Paare.",
      images: [
        <img src="" />,
        <img src="" />,
        <img src="" />
      ],
      location: "Hamburg, Innenstadt",
      size: 65,
      rooms: 2
    };

    setTimeout(() => {
      setData(fakeInserat);
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) {
    return <p className="text-center mt-5">Lade Inserat...</p>;
  }

  if (!data) {
    return <p className="text-center mt-5">Inserat nicht gefunden.</p>;
  }

  return (
    <div className="col-lg-10 mx-auto">

      {/* Titel */}
      <h1 className="mb-3">{data.title}</h1>

      {/* Preis */}
      <h3 className="text-primary mb-4">{data.price} € / Monat</h3>

      {/* Bildergalerie */}
      <div id="carouselExample" className="carousel slide mb-4">
        <div className="carousel-inner">
          {data.images.map((img, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img src={img} className="d-block w-100" alt="Wohnung" />
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* Details */}
      <div className="row mb-4">
        <div className="col-md-4">
          <div className="card p-3">
            <h5>Details</h5>
            <p><strong>Ort:</strong> {data.location}</p>
            <p><strong>Größe:</strong> {data.size} m²</p>
            <p><strong>Zimmer:</strong> {data.rooms}</p>
          </div>
        </div>

        <div className="col-md-8">
          <div className="card p-3">
            <h5>Beschreibung</h5>
            <p>{data.description}</p>
          </div>
        </div>
      </div>

      {/* Aktionen */}
      <div className="d-flex gap-3">
        <button className="btn btn-outline-primary">
          ❤️ Zu Favoriten hinzufügen
        </button>

        <button className="btn btn-success">
          📩 Anfrage senden
        </button>
      </div>
    </div>
  );
}
