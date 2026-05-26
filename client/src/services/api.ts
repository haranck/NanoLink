import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

export const shortenUrl = async (originalUrl: string): Promise<string> => {
  try {
    const response = await api.post("/shorten", { originalUrl });
    return response.data.shortUrl;
  } catch (error) {
    console.error("Error shortening URL:", error);
    throw error;
  }
};
