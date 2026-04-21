// src/pages/admin/UserManagement.jsx

import { useEffect, useState } from "react";

export default function UserManagement() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fake-Daten (später API)
    const fakeUsers = [
      { id: 1, email: "user1@test.de", role: "gesuchter" },
      { id: 2, email: "vermieter@test.de", role: "vermieter" },
      { id: 3, email: "admin@test.de", role: "admin" }
    ];

    setUsers(fakeUsers);
  }, []);

  return (
    <div>
      <h1 className="mb-4">Benutzerverwaltung</h1>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>E-Mail</th>
            <th>Rolle</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
