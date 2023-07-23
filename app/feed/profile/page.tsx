'use client';

import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import useCurrentUser from '@/hooks/useCurrentUser';
import PageHeader from '@/components/layout/PageHeader';
import { ClipLoader } from 'react-spinners';

import { useSession } from 'next-auth/react';

// async function getUserData(email: any) {
//   const res = await fetch('http://localhost:3000/api/users/' + email);

//   if (!res.ok) {
//     throw new Error('Failed to fetch data');
//   }
//   return res.json();
// }

const Page = () => {
  // const session = await getServerSession(authOptions);
  const { data: session } = useSession();

  // const user = await getUserData(session?.user?.email);
  const { data: userData, isLoading } = useCurrentUser(session?.user?.email);

  if (isLoading || !userData) {
    return (
      <>
        <PageHeader title={'Profile'} isRefresh={true} opacity />

        <div className="flex justify-center items-center h-full -m-16">
          <ClipLoader color="text-yellow-600" size={80} />
        </div>
      </>
    );
  }

  redirect('/feed/profile/' + userData.id);
};
export default Page;
