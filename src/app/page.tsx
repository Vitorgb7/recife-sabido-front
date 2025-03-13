"use client";

import IndicatorCard from "./components/IndicatorCard";
import Chart from "./components/Chart";
import TransportWidget from "./components/TransportWidget";
import MessageWidget from "./components/MessageWidget";
import "./styles/dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="main-dashboard">
        <div className="dashboard-grid">
          <IndicatorCard title="Saúde" value={42} color="#ef4444" />
          <IndicatorCard title="Transporte" value={79} color="#22c55e" />
          <IndicatorCard title="Educação" value={52} color="#facc15" />
        </div>
        <Chart />
      </div>
      <div className="side-widgets">
        <TransportWidget />
        <MessageWidget />
      </div>
    </div>
  );
}
