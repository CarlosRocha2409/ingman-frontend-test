import { api } from "../config/api.config";

export default async function fetchReceipts(page = 1) {
  return api
    .get("/receipt", {
      params: {
        page,
      },
    })
    .then(({ data }) => {
      return data;
    });
}
