"use client";

import "../styles/chatbot.css";
import { useState, useEffect, useRef } from "react";
import { getChatbotResponse } from "../services/chatbotService";

const Chatbot = () => {
  const [userMessage, setUserMessage] = useState("");
  const [chat, setChat] = useState<{ user: string; bot: string }[]>([]);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const handleSendMessage = async () => {
    if (!userMessage.trim()) return;

    const response = await getChatbotResponse(userMessage);
    setChat((prevChat) => [...prevChat, { user: userMessage, bot: response }]);
    setUserMessage("");
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  return (
    <div className="chatbot-widget">
      <div className="chatbot-header">
        <img src="/assistente.png" alt="Aurora" className="chatbot-avatar" />
        <h2>Olá, eu sou a Aurora, pergunte-me o que quiser!</h2>
      </div>

      <div className="chatbot-messages">
        {chat.map((msg, index) => (
          <div key={index} className="chatbot-message-container">
            {msg.user && (
              <div className="chatbot-message user">
                <p className="chatbot-bubble user">{msg.user}</p>
              </div>
            )}
            {msg.bot && (
              <div className="chatbot-message bot">
                <p className="chatbot-bubble bot">{msg.bot}</p>
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
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