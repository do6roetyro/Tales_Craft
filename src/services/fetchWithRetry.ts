const fetchWithRetry = async (
  url: string,
  options: RequestInit,
  retries = 3,
  delay = 1000
): Promise<Response> => {
  try {
    const response = await fetch(url, options);
    if (!response.ok && retries > 0) {
      console.log(`Retrying request... Retries left: ${retries - 1}`);
      await new Promise((resolve) => setTimeout(resolve, delay));
      return fetchWithRetry(url, options, retries - 1, delay * 2);
    }
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response; // Возвращаем исходный Response для обработки в другом месте
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default fetchWithRetry;
