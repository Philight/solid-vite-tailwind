import axios from "axios";

const api = axios.create({
  baseURL: process.env.PUBLIC_API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Accept-Language":
      typeof navigator !== "undefined"
        ? ((navigator.languages && navigator.languages.length
            ? navigator.languages[0]
            : navigator.language) ?? "cs")
        : "cs",
  },
  withCredentials: true,
});

export default api;
