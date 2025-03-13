export const getChatbotResponse = async (message: string) => {
    try {
      // Simulando uma resposta da API (substitua pela integração real)
      const response = await new Promise((resolve) =>
        setTimeout(() => resolve(`Resposta do chatbot para: "${message}"`), 1000)
      );
  
      return response as string;
    } catch (error) {
      console.error("Erro ao obter resposta do chatbot:", error);
      return "Desculpe, ocorreu um erro.";
    }
  };
  