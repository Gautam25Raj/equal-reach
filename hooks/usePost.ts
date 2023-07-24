'use client';

import useSWR from 'swr';

import fetcher from '@/libs/fetcher';

const usePost = (postId: any) => {
  const { data, error, isLoading, mutate } = useSWR(
    `/api/posts/${postId}`,
    fetcher
  );

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default usePost;
