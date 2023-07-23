'use client';

import { useSession } from 'next-auth/react';

export function useClientSession() {
  const { data, status } = useSession();

  if (status === 'authenticated') return data;
}
