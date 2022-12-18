import { api } from "../config/api.config";

export default async function fetchSingleReceipt(id: number) {
  return api.get(`/receipt/${id}`).then(({ data }) => {
    return data;
  });
}
