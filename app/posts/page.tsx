'use client';

import useCurrentUser from '@/hooks/useCurrentUser';
import { ClipLoader } from 'react-spinners';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

const Page = () => {
  const { data: session } = useSession();
  const { data: userData, isLoading } = useCurrentUser(session?.user?.email);

  if (isLoading || !userData) {
    return (
      <div className="col-span-10 lg:col-span-6 h-[90vh] md:h-screen border-x border-gray-200">
        <div className="flex justify-center items-center h-full -m-16">
          <ClipLoader color="text-yellow-600" size={80} />
        </div>
      </div>
    );
  }

  redirect('/feed');
};
export default Page;
