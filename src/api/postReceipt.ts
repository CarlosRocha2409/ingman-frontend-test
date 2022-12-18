import { api } from "../config/api.config";

export default async function postReceipt({
  receipt,
  details,
}: {
  receipt: { userId: number };
  details: { productId: number; quantity: number }[];
}) {
  return api
    .post("/receipt", {
      receipt,
      details,
    })
    .then(({ data }) => {
      return data;
    });
}
