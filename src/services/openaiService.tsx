const OPENAI_API_URL =
  "https://api.openai.com/v1/engines/davinci-002/completions";

interface FormData {
  theme: string;
  heroes: string;
  environment: string;
  age: string;
  additional: string;
}

// Функция для повторных попыток запроса
const fetchWithRetry = async (url: string, options: RequestInit, retries = 3, delay = 1000): Promise<any> => {
  try {
    const response = await fetch(url, options);
    if (!response.ok && response.status === 429 && retries > 0) {
      console.log(`Retrying request... Retries left: ${retries - 1}`);
      await new Promise(resolve => setTimeout(resolve, delay));
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
    prompt: `Создай детскую сказку по следующим критериям. Тема: ${formData.theme}, Герои: ${formData.heroes}, Окружение: ${formData.environment}, Возраст ребенка: ${formData.age}, Дополнительно: ${formData.additional}`,
    max_tokens: 300,
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
    const data = await fetchWithRetry(OPENAI_API_URL, requestOptions);
    console.log("Ответ OpenAI:", data);
    return data.choices[0].text;
  } catch (error) {
    console.error("Ошибка при запросе к OpenAI:", error);
    throw error;
  }
}