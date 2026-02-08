import React from "react";

export default function App() {
  const items = [
    { id: "A12", name: "Lot 2 - Poduri", status: "În execuție", risk: "Med" },
    { id: "B04", name: "Lot 4 - Asfalt", status: "Întârziere", risk: "High" },
    { id: "C09", name: "Lot 1 - Terasamente", status: "On track", risk: "Low" }
  ];

  return (
    <main style={{ fontFamily: "sans-serif", padding: 24 }}>
      <h1>Portal Proiecte — Demo Frontend</h1>
      <p>UI simplu pentru status, risc și documente cheie.</p>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th align="left">ID</th>
            <th align="left">Proiect</th>
            <th align="left">Status</th>
            <th align="left">Risc</th>
          </tr>
        </thead>
        <tbody>
          {items.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.status}</td>
              <td>{row.risk}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
