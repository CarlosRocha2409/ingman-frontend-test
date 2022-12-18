import { PaginatetResponse } from "./fetch.type";
import { IProduct } from "./product.type";
import { IUser } from "./user.type";

export interface IReceiptDetail {
  id: number;
  product: IProduct;
  tax: number;
  quantity: number;
  subtotal: number;
  total: number;
  created_at: Date;
  taxtPercentage: string;
}

export interface IReceipt {
  id: number;
  details: IReceiptDetail[];
  created_at: Date;
  total: number;
  user: IUser;
  tax: number;
  taxtPercentage: string;
  subtotal: number;
}

export type TReceiptGetResponse = PaginatetResponse<IReceipt>;
