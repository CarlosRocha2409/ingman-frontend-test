import { useQuery } from "react-query";
import fetchUsers from "../api/fetchUsers";
import { TUserGetResponse } from "../types/user.type";

export default function useGetUsers({ page }: { page: number }): {
  data: TUserGetResponse;
  isLoading: boolean;
} {
  const { data, isLoading } = useQuery(
    ["receipts", page],
    () => fetchUsers(page),
    {
      onError: (e) => {
        console.log(e);
      },
    }
  );
  return {
    isLoading,
    data,
  };
}
