import { AxiosRequestConfig } from "axios"

export type RequestOptionT = {
    key: string, // Unique query key
    url: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' // API endpoint
    options?: object, // Optional react-query options
    axiosConfig?: AxiosRequestConfig // Optional custom Axios configuration
  }