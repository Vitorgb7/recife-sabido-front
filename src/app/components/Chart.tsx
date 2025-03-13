"use client"; 

import "../styles/dashboard.css";

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

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
    <div className="bg-white p-5 shadow rounded-lg">
      <h3 className="text-lg font-semibold mb-3">Informações de Saúde Pública</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
