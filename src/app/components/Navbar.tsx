"use client";

import "../styles/navbar.css";
import { FaBell } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="navbar">
      <input className="navbar-search" placeholder="Pesquisar" />
      <div className="navbar-icons">
        <FaBell className="navbar-bell" />
        <span className="navbar-notification-badge">2</span>
        <div className="navbar-profile">
          <img src="/avantar.png" alt="User Avatar" className="navbar-avatar" />
          <span className="navbar-username">João Campos</span>
        </div>
      </div>
    </div>
  );
}
