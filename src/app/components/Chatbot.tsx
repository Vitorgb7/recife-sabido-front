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
    <div className="fixed bottom-5 right-5 w-80 bg-white shadow-lg rounded-lg p-4 border">
      <h2 className="text-lg font-bold mb-2">Chatbot</h2>
      <div className="h-40 overflow-y-auto border p-2 rounded">
        {chat.map((msg, index) => (
          <div key={index} className="mb-2">
            <p className="text-blue-600 font-semibold">Você: {msg.user}</p>
            <p className="text-gray-700">Bot: {msg.bot}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 flex">
        <input
          type="text"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          placeholder="Digite sua mensagem..."
          className="flex-1 p-2 border rounded-l"
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 text-white px-4 py-2 rounded-r"
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

export default Chatbot;