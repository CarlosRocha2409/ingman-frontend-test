import { useMutation } from "react-query";
import postReceipt from "../api/postReceipt";

export default function usePostProduct() {
  const { data, mutate, isLoading } = useMutation(postReceipt);
  return {
    data,
    mutate,
    isLoading,
  };
}
