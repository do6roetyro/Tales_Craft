const OPENAI_API_URL = "https://api.openai.com/v1/chat/completions";

interface FormData {
  theme: string;
  heroes: string;
  environment: string;
  age: string;
  additional: string;
}

interface OpenAIError {
  message: string;
}

// Функция для повторных попыток запроса
const fetchWithRetry = async (
  url: string,
  options: RequestInit,
  retries = 3,
  delay = 1000
): Promise<any> => {
  try {
    const response = await fetch(url, options);
    if (!response.ok && response.status === 429 && retries > 0) {
      console.log(`Retrying request... Retries left: ${retries - 1}`);
      await new Promise((resolve) => setTimeout(resolve, delay));
      return fetchWithRetry(url, options, retries - 1, delay * 2); // Экспоненциальная задержка
    }
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export async function fetchTaleFromOpenAI(formData: FormData): Promise<string> {
  const requestBody = {
    messages: [
      {
        role: "system",
        content: `Создай детскую сказку с названием по следующим критериям:`,
      },
      {
        role: "user",
        content: `Тема: ${formData.theme}, Герои: ${formData.heroes}, Окружение: ${formData.environment}, Возраст ребенка: ${formData.age}, Дополнительно: ${formData.additional}`,
      },
    ],
    model: "gpt-3.5-turbo", // Указываем модель явно, если это необходимо
    max_tokens: 1024,
    temperature: 0.7,
  };

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
    },
    body: JSON.stringify(requestBody),
  };

  try {
    const response = await fetchWithRetry(OPENAI_API_URL, requestOptions);
    console.log("Ответ OpenAI:", response);
    if (response.errors) {
      throw new Error(
        `API error: ${response.errors
          .map((error: OpenAIError) => error.message)
          .join(", ")}`
      );
    }
    return response.choices[0].message.content; // Получение содержимого сообщения
  } catch (error) {
    console.error("Ошибка при запросе к OpenAI:", error);
    throw error;
  }
}
