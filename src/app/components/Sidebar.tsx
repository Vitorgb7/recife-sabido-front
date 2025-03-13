import Link from "next/link";
import "../styles/sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src="/logo-sabido.jpeg" alt="logo" className="sidebar-logo" />
        <h2 className="sidebar-title">
          Recife <span className="sidebar-highlight">Sabido</span>
        </h2>
      </div>
      <nav className="sidebar-nav">
        <Link href="/" className="sidebar-link active">
          Dashboard
        </Link>
        <Link href="/profile" className="sidebar-link">
          Perfil
        </Link>
        <div className="sidebar-section">Análises</div>
        <Link href="/health" className="sidebar-link">
          Saúde
        </Link>
        <Link href="/education" className="sidebar-link">
          Educação
        </Link>
        <div className="sidebar-section">Schedule</div>
        <Link href="/chat" className="sidebar-link">
          Aurora
        </Link>
        <Link href="/reports" className="sidebar-link notification">
          Relatórios <span className="notification-badge">2</span>
        </Link>
        <div className="sidebar-section">Ajuda</div>
        <Link href="/settings" className="sidebar-link">
          Configurações
        </Link>
        <Link href="/docs" className="sidebar-link">
          Documentação
        </Link>
      </nav>
      <div className="sidebar-footer">
        <Link href="/logout" className="sidebar-link logout">
          Log out
        </Link>
      </div>
    </div>
  );
}