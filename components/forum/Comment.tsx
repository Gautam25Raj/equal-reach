'use client';

import Image from 'next/image';
import { formatDistanceToNowStrict } from 'date-fns';
import { useMemo } from 'react';
import { useRouter } from 'next/navigation';

interface CommentsProps {
  id: string;
  body: string;
  postId: string;
  createdAt: string;
  updatedAt: string;
  user: any;
}

const Comment = ({
  id,
  body,
  postId,
  createdAt,
  updatedAt,
  user,
}: CommentsProps) => {
  const router = useRouter();

  const createdAtDate = useMemo(() => {
    if (!createdAt) return null;

    return formatDistanceToNowStrict(new Date(createdAt), {
      addSuffix: true,
    });
  }, [createdAt]);

  const goToUserProfile = (e: any) => {
    e.stopPropagation();

    router.push(`/feed/profile/${user.id}`);
  };

  return (
    <>
      <div className="relative flex space-x-2">
        <hr className="absolute left-5 top-9 h-8 border-x border-twitter/30" />

        <Image
          src={user?.profileImage || '/user/placeholder.png'}
          alt="Post Image"
          className="mt-1 h-7 w-7 rounded-full object-cover"
          width={28}
          height={28}
        />

        <div>
          <div className="flex items-center space-x-1">
            <p
              className="mr-1 font-bold hover:underline"
              onClick={goToUserProfile}
            >
              {user.name}
            </p>
            <p
              className="hidden text-sm text-gray-500 lg:block hover:underline"
              onClick={goToUserProfile}
            >
              {user.username}
            </p>
            <p className="text-gray-500 text-xs">{createdAtDate}</p>
          </div>

          <p>{body}</p>
        </div>
      </div>
    </>
  );
};
export default Comment;
