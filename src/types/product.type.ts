import { PaginatetResponse } from "./fetch.type";
export interface IProduct {
  code: string;
  id: number;
  description: string;
  price: number;
  quantity: number;
  active: number;
  created_at: Date;
}

export type TProductGetResponse = PaginatetResponse<IProduct>;
