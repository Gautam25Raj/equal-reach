'use client';

import Image from 'next/image';
import Avatar from '../profile/Avatar';
import { formatDistanceToNowStrict } from 'date-fns';
import { useMemo } from 'react';

interface PostContentProps {
  image: boolean;
  userData: Record<string, any>;
  body: string;
  userId: string;
  createdAt: string;
}

const PostContent = ({
  image,
  userData,
  body,
  userId,
  createdAt,
}: PostContentProps) => {
  const createdAtDate = useMemo(() => {
    if (!createdAt) return null;

    return formatDistanceToNowStrict(new Date(createdAt), {
      addSuffix: true,
    });
  }, [createdAt]);

  return (
    <div className="flex">
      <div className="w-12 mr-2">
        <Avatar profileImage={userData.profileImage} userId={userId} />
      </div>

      <div className="w-full`">
        <div className="flex flex-col sm:items-center sm:space-x-1 sm:flex-row">
          <p className="font-bold text-rainbow w-fit">{userData.name}</p>
          <p className="text-sm text-gray-500 sm:block">
            {'@' + userData.username}
          </p>
          <p className="text-gray-500 text-sm">{createdAtDate}</p>
        </div>

        <p className="text-gray-600 mt-4">{body}</p>

        {image && (
          <div className="border bg-white border-gray-200 rounded-xl mt-4 mx-auto max-w-[542px]">
            <Image
              src="/favicon.ico"
              alt="Post Image"
              className="max-h-60 rounded-lg object-contain"
              width={542}
              height={240}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostContent;
