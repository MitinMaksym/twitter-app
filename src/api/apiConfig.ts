import axios from "axios";

export const instance = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:3000/api/v1/",
});

export enum ResultStatus {
  Success = "success",
  Errror = "error",
}

export type ApiResponseType<D> = {
  status: ResultStatus;
  results: number;
  data: D;
};
