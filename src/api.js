import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const CATALOG_ID = import.meta.env.VITE_CATALOG_ID;

export const getGPTResponse = async (prompt) => {
  try {
    const requestBody = {
      modelUri: `gpt://${CATALOG_ID}/yandexgpt-lite`,
      completionOptions: {
        stream: false,
        temperature: 0.6,
        maxTokens: 500,
      },
      messages: [
        {
          role: "user",
          text: prompt,
        },
      ],
    };

    const response = await axios.post("/api/completion", requestBody, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Api-Key ${API_KEY}`,
      },
    });

    return response.data.result.alternatives[0].message.text;
  } catch (error) {
    console.error("Ошибка при запросе к API:", error.message);
    return "Не удалось получить ответ. Попробуйте позже.";
  }
};
