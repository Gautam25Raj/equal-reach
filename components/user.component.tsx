'use client';

import { useSession } from 'next-auth/react';

const User = () => {
  const { data: session } = useSession();

  return (
    <>
      <h1>Client Session</h1>
      <pre>{JSON.stringify(session)}</pre>
    </>
  );
};

export default User;
