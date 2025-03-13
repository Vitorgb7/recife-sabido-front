export const getChatbotResponse = async (message: string) => {
  try {
    const response = await fetch("http://localhost:5000/chat/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: message }),
    });

    if (!response.ok) {
      throw new Error("Erro ao se comunicar com o chatbot");
    }

    const data = await response.json();
    return data.response; 
  } catch (error) {
    console.error("Erro ao obter resposta do chatbot:", error);
    return "Desculpe, ocorreu um erro.";
  }
};
