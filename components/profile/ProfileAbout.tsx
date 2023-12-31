'use client';

import { useSession } from 'next-auth/react';
import { format } from 'date-fns';
import { useMemo } from 'react';
import { FollowButton, ProfileEditButton } from '../ui/ClientButtons';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';
import useFollow from '@/hooks/useFollow';

interface ProfileAboutProps {
  userId: string;
  userEmail: string;
  userCreatedAt: string;
  userName: string;
  userUsername: string;
  userBio: string;
  userFollowers: Array<string>;
  userFollowing: number;
}

const ProfileAbout = ({
  userId,
  userEmail,
  userCreatedAt,
  userName,
  userUsername,
  userBio,
  userFollowers,
  userFollowing,
}: ProfileAboutProps) => {
  const { data: currentUserData } = useSession();

  const { isFollowing, toggleFollow } = useFollow(userId);

  const createdAt = useMemo(() => {
    if (userCreatedAt) {
      return format(new Date(userCreatedAt), 'MMMM yyyy');
    }
  }, [userCreatedAt]);

  return (
    <section className="border-b-[1px] border-gray-200 pb-4 px-4">
      <div className="flex justify-end p-2 w-fit ml-auto md:w-full">
        {currentUserData?.user?.email === userEmail ? (
          <ProfileEditButton />
        ) : (
          <FollowButton
            onClick={toggleFollow}
            label={isFollowing ? 'Unsupport' : 'Support'}
          />
        )}
      </div>

      <div className="mt-8">
        <div className="flex flex-col">
          <p className="text-2xl font-semibold text-rainbow w-fit">
            {userName}
          </p>

          <p className="text-md text-neutral-500">@{userUsername}</p>
        </div>
      </div>

      <div className="flex flex-col mt-4">
        {userBio && <p className="mb-4">{userBio}</p>}

        <div className="flex flex-row items-center gap-2 text-neutral-500">
          <div className="flex items-center space-x-3 text-gray-400">
            <CalendarDaysIcon className="h-5 w-5 transition-transform duration-150 ease-out hover:scale-150" />
          </div>

          <p>Joined {createdAt}</p>
        </div>
      </div>

      <div className="flex items-center mt-4 gap-6">
        <div className="flex items-center gap-1">
          <p className="font-semibold">{userFollowing}</p>
          <p className="text-neutral-500">Supporting</p>
        </div>

        <div className="flex items-center gap-1">
          <p className="font-semibold">{userFollowers || 0}</p>
          <p className="text-neutral-500">Supporters</p>
        </div>
      </div>
    </section>
  );
};

export default ProfileAbout;
