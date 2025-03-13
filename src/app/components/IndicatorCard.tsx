"use client"; 

import { RadialBarChart, RadialBar } from "recharts";

interface IndicatorCardProps {
  title: string;
  value: number;
  color: string;
}

export default function IndicatorCard({ title, value, color }: IndicatorCardProps) {
  const data = [{ name: title, value }];

  return (
    <div className="bg-white p-5 shadow rounded-lg flex flex-col items-center">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <RadialBarChart
        width={150}
        height={150}
        innerRadius="80%"
        outerRadius="100%"
        data={data}
        startAngle={90}
        endAngle={450}
      >
        <RadialBar label={{ position: "insideStart", fill: "#000" }} dataKey="value" fill={color} />
      </RadialBarChart>
      <p className="text-2xl font-bold mt-2">{value}%</p>
    </div>
  );
}
