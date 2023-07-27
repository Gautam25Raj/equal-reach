'use client';

import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import useCurrentUser from '@/hooks/useCurrentUser';
import PageHeader from '@/components/layout/PageHeader';
import { ClipLoader } from 'react-spinners';

import { useSession } from 'next-auth/react';

const Page = () => {
  const { data: session } = useSession();
  const { data: userData, isLoading } = useCurrentUser(session?.user?.email);

  if (isLoading || !userData) {
    return (
      <>
        <PageHeader title={'Profile'} opacity />

        <div className="flex justify-center items-center h-full -m-16">
          <ClipLoader color="text-yellow-600" size={80} />
        </div>
      </>
    );
  }

  redirect('/feed/profile/' + userData.id);
};
export default Page;
