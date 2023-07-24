'use client';

import { useSession } from 'next-auth/react';
import useUsers from '@/hooks/useUsers';
import Avatar from '../profile/Avatar';
import { ClipLoader } from 'react-spinners';
import { Suspense } from 'react';
import { useRouter } from 'next/navigation';

async function getUsersData() {
  const res = await fetch('http://localhost:3000/api/users');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default function FollowBar() {
  // const users = await getUsersData();
  const router = useRouter();
  const { data: currentUserData } = useSession();
  const { data: usersData, isLoading } = useUsers();

  const removeCurrentUser = (user: Record<string, any>) => {
    return user.email !== currentUserData?.user?.email;
  };

  const getCurrentUser = (user: Record<string, any>) => {
    return user.email !== currentUserData?.user?.email;
  };

  const filteredUsers = usersData?.filter(removeCurrentUser);

  if (usersData?.length === 0) {
    return null;
  }

  const handleClick = (e: any) => {
    e.stopPropagation();
    const currentUser = usersData?.filter(getCurrentUser);
    console.log(currentUser);

    router.push(`/feed/profile/${currentUser[0].id}`);
  };

  return (
    <div className="w-full px-6 py-4 hidden lg:block border border-gray-300 mt-10 rounded-xl">
      <div className="p-2">
        <h2 className="text-xl font-semibold px-2">New members to Support</h2>

        <Suspense
          fallback={
            <div className="flex justify-center items-center h-16 -m-16">
              <ClipLoader color="text-yellow-600" size={40} />
            </div>
          }
        >
          <div className="flex flex-col gap-6 mt-4">
            {filteredUsers?.map((user: Record<string, any>) => (
              <div
                key={user.id}
                className="flex flex-row gap-4 items-center cursor-pointer hover:bg-gray-100 p-2 rounded-md"
                onClick={handleClick}
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
