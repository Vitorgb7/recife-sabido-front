"use client";

import { RadialBarChart, RadialBar } from "recharts";

interface IndicatorCardProps {
  title: string;
  value: number;
  color: string;
}

export default function IndicatorCard({ title, value, color }: IndicatorCardProps) {
  const data = [{ name: title, value }, { name: "Restante", value: 100 - value }];

  return (
    <div className="bg-white p-5 shadow-md rounded-lg flex flex-col items-center w-[180px]">
      <h3 className="text-md font-bold mb-2 text-black">{title}</h3>
      
      {/* Container do gráfico */}
      <div className="relative w-[140px] h-[140px] flex items-center justify-center">
        {/* Gráfico */}
        <RadialBarChart
          width={140}
          height={140}
          innerRadius="75%"
          outerRadius="100%"
          barSize={10}
          data={data}
          startAngle={90}
          endAngle={450}
        >
          <RadialBar
            dataKey="value"
            fill={color}
            cornerRadius={50}
            background={{ fill: "#EAECEF" }}
          />
        </RadialBarChart>

        {/* Número 100% centralizado */}
        <div
          className="absolute text-3xl font-bold"
          style={{
            fontFamily: "Montserrat, sans-serif",
            color: "#000",
            top: "50%",
            left: "50%",
            transform: "translate(36%, -400%)", // Centraliza exatamente
            fontWeight: "bold",
          }}
        >
          {value}%
        </div>
      </div>
    </div>
  );
}