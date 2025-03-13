"use client";

import Image from "next/image";
import "../styles/MessageWidget.css";

const messages = [
  { user: "Aurora", text: "A Prefeitura do Recife trabalha para garantir uma educação de qual...", time: "15:56", unread: 2 },
  { user: "Aurora", text: "Ah sim, podemos consultar essa informação, me diga seu bairro.", time: "Ontem", unread: 0 },
  { user: "Aurora", text: "Bom João, entendo a sua situação, o mais apropriado é buscar o pos...", time: "Terça", unread: 0 },
  { user: "Aurora", text: "Olá João, tudo bem? Estou aqui para tirar suas dúvidas!", time: "Segunda", unread: 0 },
];

export default function MessageWidget() {
  return (
    <div className="message-widget">
      <div className="header">
        <div className="avatar-container">
          <Image src="/assistente.png" alt="Aurora" width={40} height={40} className="avatar" />
          <span className="status-online"></span>
        </div>
        <h3 className="title">Aurora</h3>
      </div>

      <ul className="message-list">
        {messages.map((msg, index) => (
          <li key={index} className="message-item">
            <Image src="/assistente.png" alt="Aurora" width={35} height={35} className="message-avatar" />
            <div className="message-content">
              <p className="message-text">{msg.text}</p>
              <div className="message-footer">
                <span className="message-time">{msg.time}</span>
                {msg.unread > 0 && <span className="unread-badge">{msg.unread}</span>}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}