import { fetchAPI } from "../utils/fetch.ts";
import { environments } from "../constans/environments.ts";

const getAllProduct = async () => {
  return await fetchAPI(`${environments.API_URL}/products`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const getProductById = async (id: number) => {
  return await fetchAPI(`${environments.API_URL}/products/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export { getAllProduct, getProductById };
