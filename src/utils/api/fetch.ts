import axiosInstance from './axiosInstance';
import { AxiosRequestConfig } from 'axios';

/**
 * A reusable function for API requests.
 *
 * @template T - The expected response data type.
 * @param {string} url - The endpoint URL.
 * @param {string} method - The HTTP method (GET, POST, PUT, DELETE).
 * @param {Object} [data] - The request payload for POST/PUT.
 * @param {AxiosRequestConfig} [config] - Additional Axios config options.
 * @returns {Promise<T>} - The API response.
 */
const fetchAPI = async <T>(
  {url= '', method = 'GET', data, config }:{url: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  data?: any,
  config?: AxiosRequestConfig
}): Promise<T> => {
    console.log('config', config)
  try {
    const response = await axiosInstance({
      url,
      method,
      data,
      ...config,
    });
    return response.data as T; // Extract and return the data property
  } catch (error) {
    throw error; // Let the caller handle the error
  }
};

export default fetchAPI;
