import { useQuery } from "react-query";
import fetchSingleUser from "../api/fetchSingleUser";
import { IUser } from "../types/user.type";

export default function useSearchSingleUser({
  id,
  fetch,
  disableFetch,
  updateUser,
}: {
  id: number;
  fetch: boolean;
  disableFetch: () => void;
  updateUser: (user: IUser) => void;
}): {
  data: IUser;
  isLoading: boolean;
} {
  const { data, isLoading } = useQuery(
    ["receipts", id],
    () => fetchSingleUser(id),
    {
      onError: (e) => {
        console.log(e);
        disableFetch();
      },
      onSuccess: (data) => {
        updateUser(data);
        disableFetch();
      },
      enabled: fetch,
    }
  );
  return {
    isLoading,
    data,
  };
}
