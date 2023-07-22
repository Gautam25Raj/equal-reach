'use client';

import useSWR from 'swr';

import fetch from '@/libs/fetcher';

const useCurrentUser = (email: any) => {
  const { data, error, isLoading, mutate } = useSWR(
    `/api/users/${email}`,
    fetch
  );

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useCurrentUser;
