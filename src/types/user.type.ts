import { PaginatetResponse } from "./fetch.type";

export interface IUser {
  id: number;
  name: string;
  lastname: string;
  fullName: string;
  email: string;
  active: number;
  created_at: Date;
}

export type TUserGetResponse = PaginatetResponse<IUser>;
