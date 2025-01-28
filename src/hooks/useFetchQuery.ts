import { useQuery, UseQueryResult } from '@tanstack/react-query';
import fetchAPI from '@/utils/api/fetch'; // Import the fetchAPI function
import { RequestOptionT } from '@/utils/api/types';

/**
 * Custom hook for fetching data using fetchAPI and react-query.
 *
 * @template T - The expected response data type.
 * @param {string} key - The unique query key.
 * @param {string} url - The API endpoint.
 * @param {string} method - The method request
 * @param {Object} [options] - Optional react-query options.
 * @param {AxiosRequestConfig} [axiosConfig] - Optional Axios config.
 * @returns {UseQueryResult<T>} - The query result from react-query.
 */
const useFetchQuery = <T>(
  {
    key='',
    url='',
    method = 'GET',
    options = {},
    axiosConfig = {}
  }:RequestOptionT): UseQueryResult<T, Error> => {
  // Fetcher function that uses fetchAPI
  const fetcher = async ({ signal } : { signal?: AbortSignal }): Promise<T> => {
    return fetchAPI<T>({
      url,
      method: method, // Assuming GET for simplicity, adjust as needed
      config: {...axiosConfig, signal}, // Pass custom Axios config
    });
  };

  // Use react-query's useQuery hook to fetch data
  const query = useQuery({
    queryKey: [key],
    queryFn: fetcher,
        retry: 2, // Retry failed requests up to 2 times
        refetchOnWindowFocus: false, // Disable refetch on window focus
        ...options, // Additional options passed to react-query's useQuery
  });

  return query;
};

export default useFetchQuery;
