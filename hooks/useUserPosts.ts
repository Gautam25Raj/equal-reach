'use client';

import useSWR from 'swr';

import fetcher from '@/libs/fetcher';

const useUserPosts = (userId: any) => {
  const { data, error, isLoading, mutate } = useSWR(
    `/api/posts/user/${userId}`,
    fetcher
  );

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useUserPosts;
