import { useQuery } from "react-query";
import fetchSingleProduct from "../api/fetchSingleProduct";
import { IProduct } from "../types/product.type";
import { IUser } from "../types/user.type";

export default function useSearchSingleProduct({
  code,
  fetch,
  disableFetch,
  updateProduct,
}: {
  code: string;
  fetch: boolean;
  disableFetch: () => void;
  updateProduct: (user: IProduct) => void;
}): {
  data: IUser;
  isLoading: boolean;
} {
  const { data, isLoading } = useQuery(
    ["receipts", code],
    () => fetchSingleProduct(code),
    {
      onError: (e) => {
        console.log(e);
        disableFetch();
      },
      onSuccess: (data) => {
        updateProduct(data);
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
