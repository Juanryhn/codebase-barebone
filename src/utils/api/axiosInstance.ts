import axios, {
    AxiosInstance,
    InternalAxiosRequestConfig,
    AxiosResponse,
  } from 'axios';
import ENV from '../env';
  // Create an Axios instance
  const axiosInstance: AxiosInstance = axios.create({
    baseURL: ENV.BASE_URL || 'https://api.example.com', // Use environment variable for flexibility
    timeout: 10000, // Set a default timeout
    headers: {
      'Content-Type': 'application/json',
    }
  });
  
  // Add a request interceptor
  axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      // Add authorization token if available
      const token = localStorage.getItem('authToken');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  
  // Add a response interceptor
  axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
      // Directly return the data from the response
      return response.data;
    },
    (error) => {
      // Handle errors globally
      if (error.response) {
        console.error(`Error: ${error.response.status} - ${error.response.data.message}`);
      } else {
        console.error('Network Error:', error.message);
      }
      return Promise.reject(error);
    }
  );
  
  export default axiosInstance;
  