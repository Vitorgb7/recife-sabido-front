"use client"; 

const messages = [
    { user: "Aurora", text: "A Prefeitura do Recife trabalha para garantir...", time: "15:56" },
    { user: "Aurora", text: "Ah sim, podemos consultar essa informação...", time: "Ter" },
    { user: "Aurora", text: "Bom João, entendo a sua situação...", time: "Ter" },
  ];
  
  export default function MessageWidget() {
    return (
      <div className="bg-white p-5 shadow rounded-lg">
        <h3 className="text-lg font-semibold">Aurora</h3>
        <ul>
          {messages.map((msg, index) => (
            <li key={index} className="border-b py-2">
              <p className="text-sm">{msg.text}</p>
              <span className="text-xs text-gray-500">{msg.time}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  