import { useQuery } from "react-query";
import fetchReceipts from "../api/fetchReceipts";
import { TReceiptGetResponse } from "../types/receipts.type";

export default function useGetReceipts({ page }: { page: number }): {
  data: TReceiptGetResponse;
  isLoading: boolean;
} {
  const { data, isLoading } = useQuery(
    ["receipts", page],
    () => fetchReceipts(page),
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
