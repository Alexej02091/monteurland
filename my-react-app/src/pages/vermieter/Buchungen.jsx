// src/pages/vermieter/Buchungen.jsx
import { useEffect, useState } from "react";

export default function Buchungen() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Fake-Daten (später API)
    const fakeBookings = [
      {
        id: 1,
        mieter: "Max Mustermann",
        datum: "2024-05-12",
        status: "Bestätigt"
      },
      {
        id: 2,
        mieter: "Anna Schmidt",
        datum: "2024-06-01",
        status: "Ausstehend"
      }
    ];

    setBookings(fakeBookings);
  }, []);

  return (
    <div>
      <h1 className="mb-4">Buchungen</h1>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Mieter</th>
            <th>Datum</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {bookings.map((b) => (
            <tr key={b.id}>
              <td>{b.id}</td>
              <td>{b.mieter}</td>
              <td>{b.datum}</td>
              <td>{b.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
