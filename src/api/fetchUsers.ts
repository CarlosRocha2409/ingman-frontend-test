import { api } from "../config/api.config";

export default async function fetchUsers(page = 1) {
  return api
    .get("/user", {
      params: {
        page,
      },
    })
    .then(({ data }) => {
      return data;
    });
}
