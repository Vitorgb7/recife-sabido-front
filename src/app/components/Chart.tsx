"use client";

import "../styles/dashboard.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Dez", value: 2 },
  { name: "Jan", value: 4 },
  { name: "Fev", value: 8 },
  { name: "Mar", value: 3 },
  { name: "Abr", value: 7 },
  { name: "Mai", value: 5 },
];

export default function Chart() {
  return (
    <div className="chart-container">
      <h3 className="chart-title">Informações de Saúde Pública</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
          <XAxis dataKey="name" tick={{ fontSize: 12, fill: "#333" }} />
          <YAxis tick={{ fontSize: 12, fill: "#333" }} />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}