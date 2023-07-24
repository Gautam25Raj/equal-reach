'use client';

import { Suspense } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { ClipLoader } from 'react-spinners';

import useUsers from '@/hooks/useUsers';

import Avatar from '../profile/Avatar';

export default function FollowBar() {
  const router = useRouter();
  const { data: currentUserData } = useSession();
  const { data: usersData } = useUsers();

  const removeCurrentUser = (user: Record<string, any>) => {
    return user.email !== currentUserData?.user?.email;
  };

  const filteredUsers = usersData?.filter(removeCurrentUser);

  if (usersData?.length === 0) {
    return null;
  }

  return (
    <div className="w-full px-6 py-4 hidden lg:block border border-gray-300 mt-1 rounded-xl">
      <div className="p-2">
        <h2 className="text-xl font-semibold px-2">New members to Support</h2>

        <Suspense
          fallback={
            <div className="flex justify-center items-center h-16 -m-16">
              <ClipLoader color="text-yellow-600" size={40} />
            </div>
          }
        >
          <div className="flex flex-col gap-1 mt-4">
            {filteredUsers?.map((user: Record<string, any>) => (
              <div
                key={user.id}
                className="flex flex-row gap-4 items-center cursor-pointer hover:bg-gray-100 p-2 rounded-md"
                onClick={() => router.push(`/feed/profile/${user.id}`)}
              >
                <Avatar userId={user.id} profileImage={user.profileImage} />

                <div className="flex flex-col">
                  <p className="font-semibold text-sm">{user.name}</p>
                  <p className="text-neutral-400 text-sm">@{user.username}</p>
                </div>
              </div>
            ))}
          </div>
        </Suspense>
      </div>
    </div>
  );
}
