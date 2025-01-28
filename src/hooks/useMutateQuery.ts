import { useMutation, UseMutationResult } from '@tanstack/react-query';
import fetchAPI from '@/utils/api/fetch';
import { MutationOptionT } from './interfaces';

/**
 * Custom hook for making API requests using fetchAPI and react-query's useMutation.
 *
 * @template TRequest - The type of the request payload.
 * @template TResponse - The expected response data type.
 * @param {RequestOptionT<TRequest, TResponse>} params - The request parameters.
 * @returns {UseMutationResult<TResponse, Error, TRequest>} - The mutation result from react-query.
 */
const useMutateQuery = <TRequest = unknown, TResponse = unknown>({
  url,
  method,
  key,
  options,
  axiosConfig,
}: MutationOptionT<TRequest, TResponse>): UseMutationResult<TResponse, Error, TRequest> => {
  // Mutation function that calls fetchAPI
  const mutation = async (data: TRequest): Promise<TResponse> => {
    console.log('data', data)
    return fetchAPI<TResponse>({
      url,
      method,
      data,
      config: axiosConfig,
    });
  };

  // Use react-query's useMutation hook
  return useMutation<TResponse, Error, TRequest>({
    mutationFn: mutation,
    mutationKey: [key],
    ...options
  });
};

export default useMutateQuery;
