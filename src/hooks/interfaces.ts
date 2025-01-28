import { UseMutationOptions } from "@tanstack/react-query";
import { AxiosRequestConfig } from "axios";

// Define the request options type
export interface MutationOptionT<TRequest, TResponse> {
    url: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    key: string,
    options?: UseMutationOptions<TResponse, Error, TRequest>;
    axiosConfig?: AxiosRequestConfig;
  }