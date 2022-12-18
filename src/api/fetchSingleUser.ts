import { api } from "../config/api.config";

export default function fetchSingleUser(id: number) {
  return api.get(`/user/${id}`).then(({ data }) => {
    return data;
  });
}
