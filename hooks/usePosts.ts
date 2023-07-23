'use client';

import useSWR from 'swr';

import fetcher from '@/libs/fetcher';

const usePosts = () => {
  const { data, error, isLoading, mutate } = useSWR(`/api/posts`, fetcher);

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default usePosts;
