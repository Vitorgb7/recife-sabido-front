"use client";

import "../styles/chatbot.css";
import { useState } from "react";
import { getChatbotResponse } from "../services/chatbotService";

const Chatbot = () => {
  const [userMessage, setUserMessage] = useState("");
  const [chat, setChat] = useState<{ user: string; bot: string }[]>([]);

  const handleSendMessage = async () => {
    if (!userMessage.trim()) return;

    const response = await getChatbotResponse(userMessage);
    setChat([...chat, { user: userMessage, bot: response }]);
    setUserMessage("");
  };

  return (
    <div className="chatbot-widget">
      <div className="chatbot-header">
        <img src="/assistente.png" alt="Aurora" className="chatbot-avatar" />
        <h2>Olá, eu sou a Aurora, pergunte-me o que quiser!</h2>
      </div>
      <div className="chatbot-messages">
        {chat.map((msg, index) => (
          <div key={index} className={`chatbot-message ${msg.user ? "user" : "bot"}`}>
            <p className={`chatbot-bubble ${msg.user ? "user" : "bot"}`}>{msg.user || msg.bot}</p>
          </div>
        ))}
      </div>
      <div className="chatbot-input-container">
        <input
          type="text"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          placeholder="Digite sua mensagem..."
          className="chatbot-input"
        />
        <button onClick={handleSendMessage} className="chatbot-send-button">
          Enviar
        </button>
      </div>
    </div>
  );
};

export default Chatbot;