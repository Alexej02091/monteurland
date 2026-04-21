// src/pages/admin/SystemLogs.jsx

import { useEffect, useState } from "react";

export default function SystemLogs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    // Fake-Daten (später API)
    const fakeLogs = [
      { id: 1, message: "Benutzer login: user1@test.de", date: "2024-05-01" },
      { id: 2, message: "Neues Inserat erstellt", date: "2024-05-02" },
      { id: 3, message: "Admin hat Einstellungen geändert", date: "2024-05-03" }
    ];

    setLogs(fakeLogs);
  }, []);

  return (
    <div>
      <h1 className="mb-4">System Logs</h1>

      <ul className="list-group">
        {logs.map((log) => (
          <li key={log.id} className="list-group-item">
            <strong>{log.date}:</strong> {log.message}
          </li>
        ))}
      </ul>
    </div>
  );
}
