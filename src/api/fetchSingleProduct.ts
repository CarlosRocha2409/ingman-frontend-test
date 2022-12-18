import { api } from "../config/api.config";

export default function fetchSingleProduct(code: string) {
  return api.get(`/product/${code}`).then(({ data }) => {
    return data;
  });
}
