// "use client";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import "./styles/global.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="container">
          <Sidebar />
          <div className="main">
            <Navbar />
            <div className="main-content">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
