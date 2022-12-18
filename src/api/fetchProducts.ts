import { api } from "../config/api.config";

export default async function fetchProducts(page = 1) {
  return api
    .get("/product", {
      params: {
        page,
      },
    })
    .then(({ data }) => {
      return data;
    });
}
