// src/pages/gesuchter/Anfragen.jsx

import { useEffect, useState } from "react";

export default function Anfragen() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // Fake-Daten (später API)
    const fakeRequests = [
      {
        id: 1,
        inserat: "Moderne Wohnung in Hamburg",
        status: "Ausstehend",
        date: "2024-05-10"
      },
      {
        id: 2,
        inserat: "Gemütliches Apartment",
        status: "Bestätigt",
        date: "2024-04-28"
      }
    ];

    setRequests(fakeRequests);
  }, []);

  return (
    <div>
      <h1 className="mb-4">Meine Anfragen</h1>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Inserat</th>
            <th>Status</th>
            <th>Datum</th>
          </tr>
        </thead>

        <tbody>
          {requests.map((req) => (
            <tr key={req.id}>
              <td>{req.id}</td>
              <td>{req.inserat}</td>
              <td>{req.status}</td>
              <td>{req.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
