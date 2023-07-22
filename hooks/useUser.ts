'use client';

import useSWR from 'swr';

import fetcher from '@/libs/fetcher';

const useUser = (userId: string) => {
  const { data, error, isLoading, mutate } = useSWR(
    `/api/session/${userId}`,
    fetcher
  );

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useUser;
