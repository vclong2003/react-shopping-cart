const API_BASE_URL = (process.env.API_URL as string) || "http://localhost:3000";

console.log("API_BASE_URL", API_BASE_URL);
const API_ENDPOINTS = {
  PRODUCTS: "/products",
  CHECKOUT: "/checkout",
};

export { API_BASE_URL, API_ENDPOINTS };
