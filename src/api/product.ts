import { fetchAPI } from "../utils/fetch.ts";
import { environments } from "../constans/environments.ts";
import type { IProduct } from "../types/product.ts";

const getAllProduct = async () => {
  return await fetchAPI(`${environments.API_URL}/products`, {
    method: "GET",
  });
};

const getProductById = async (id: number) => {
  return await fetchAPI(`${environments.API_URL}/products/${id}`, {
    method: "GET",
  });
};

const addProduct = async (data: IProduct) => {
  return await fetchAPI(`${environments.API_URL}/products`, {
    method: "POST",
    body: JSON.stringify(data),
  });
};

export { getAllProduct, getProductById, addProduct };
