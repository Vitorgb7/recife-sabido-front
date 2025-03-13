"use client";

import "../styles/transport.css";

const transportData = [
  { city: "Ibura", status: "Congestionamento", time: "18:32", color: "red" },
  { city: "Madalena", status: "Parcial", time: "18:25", color: "yellow" },
  { city: "Centro", status: "Livre", time: "18:49", color: "green" },
  { city: "Pina", status: "Livre", time: "18:55", color: "green" },
];

export default function TransportWidget() {
  return (
    <div className="transport-widget">
      <h3 className="widget-title">Transporte Público</h3>
      <table className="transport-table">
        <thead>
          <tr>
            <th>Cidade</th>
            <th>Nível</th>
            <th>Horário</th>
            <th>Mapa</th>
          </tr>
        </thead>
        <tbody>
          {transportData.map((item, index) => (
            <tr key={index}>
              <td>{item.city}</td>
              <td>
                <span className={`status ${item.color}`}>{item.status}</span>
              </td>
              <td>{item.time}</td>
              <td>
                <button className="map-button">Ver</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
