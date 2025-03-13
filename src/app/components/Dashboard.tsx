'use client';

import "../styles/dashboard.css";

import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

type CategoryType = "saude" | "transporte" | "educacao";

const Dashboard = () => {
  const [data, setData] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("saude");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/recifeData.json");
      const data = await response.json();
      setData(data);
    }
    fetchData();
  }, []);

  if (!data) {
    return <div className="loading">Carregando...</div>;
  }

  const categories: Record<CategoryType, { name: string; value: number }[]> = {
    saude: [
      { name: "Hospitais", value: 40 },
      { name: "UBSs", value: 30 },
      { name: "Postos", value: 30 },
    ],
    transporte: [
      { name: "Ônibus", value: 50 },
      { name: "Metrô", value: 25 },
      { name: "BRT", value: 25 },
    ],
    educacao: [
      { name: "Escolas", value: 45 },
      { name: "Universidades", value: 35 },
      { name: "Creches", value: 20 },
    ],
  };

  const COLORS = ["#4285F4", "#34A853", "#FBBC05"];

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Dashboard</h2>

      <div className="category-buttons">
        {Object.keys(categories).map((key) => (
          <button
            key={key}
            onClick={() => setSelectedCategory(key as CategoryType)}
            className={`category-button ${selectedCategory === key ? "active" : ""}`}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </button>
        ))}
      </div>

      <div className="chart-container">
        <h3 className="chart-title">
          {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={categories[selectedCategory]}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {categories[selectedCategory].map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
