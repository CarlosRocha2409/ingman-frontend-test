import { useQuery } from "react-query";
import fetchProducts from "../api/fetchProducts";
import { TProductGetResponse } from "../types/product.type";

export default function useGetProducts({ page }: { page: number }): {
  data: TProductGetResponse;
  isLoading: boolean;
} {
  const { data, isLoading } = useQuery(
    ["receipts", page],
    () => fetchProducts(page),
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
