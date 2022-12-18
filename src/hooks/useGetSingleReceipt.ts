import { useQuery } from "react-query";
import fetchSingleReceipt from "../api/fetchSingleReceipt";
import { IReceipt } from "../types/receipts.type";

export default function useGetSingleReceipts({ id }: { id: number }): {
  data: IReceipt;
  isLoading: boolean;
} {
  const { data, isLoading } = useQuery(
    ["receipts", id],
    () => fetchSingleReceipt(id),
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
