import { NextResponse } from 'next/server';

const useUsers = async () => {
  const data = await fetch(`${process.env.NEXTAUTH_URL}/api/users`);

  return NextResponse.json(data);
};

export default useUsers;
