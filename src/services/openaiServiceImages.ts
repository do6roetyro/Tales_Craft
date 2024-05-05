const OPENAI_API_URL = "https://api.openai.com/v1/images/generations";

interface FormData {
  theme: string;
  heroes: string;
  environment: string;
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

export async function fetchImagesFromOpenAI(
  formData: FormData
): Promise<string> {
  const PROMPT = `Создай изображение для детской сказки с темой: ${formData.theme}, героями: ${formData.heroes}, окружением: ${formData.environment}`;
  const requestBody = {
    prompt: PROMPT,
    n: 1,
    size: "1024x1024",
    model: "dall-e-3",
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
    const imageUrl = response.data[0].url;
    console.log("URL изображения:", imageUrl);
    return imageUrl;
  } catch (error) {
    console.error("Ошибка при получении изображения:", error);
    throw error;
  }
}
