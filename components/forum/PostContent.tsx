'use client';

import Image from 'next/image';
import Avatar from '../profile/Avatar';
import { useRouter } from 'next/navigation';
import { formatDistanceToNowStrict } from 'date-fns';
import { useMemo } from 'react';

interface PostContentProps {
  image: string;
  userData: Record<string, any>;
  body: string;
  userId: string;
  createdAt: string;
  id: string;
}

const PostContent = ({
  id,
  image,
  userData,
  body,
  userId,
  createdAt,
}: PostContentProps) => {
  const router = useRouter();

  const createdAtDate = useMemo(() => {
    if (!createdAt) return null;

    return formatDistanceToNowStrict(new Date(createdAt), {
      addSuffix: true,
    });
  }, [createdAt]);

  const goToPost = (e: any) => {
    e.stopPropagation();

    router.push(`/posts/${id}`);
  };

  const goToUserProfile = (e: any) => {
    e.stopPropagation();

    router.push(`/feed/profile/${userId}`);
  };

  return (
    <div className="flex px-5 pt-5 hover:bg-gray-50" onClick={goToPost}>
      <div className="w-12 mr-2">
        <Avatar profileImage={userData.profileImage} userId={userId} />
      </div>

      <div className="w-full`">
        <div className="flex flex-col sm:items-center sm:space-x-1 sm:flex-row">
          <p
            className="font-bold text-rainbow w-fit hover:underline"
            onClick={goToUserProfile}
          >
            {userData.name}
          </p>
          <p
            className="text-sm text-gray-500 sm:block hover:underline"
            onClick={goToUserProfile}
          >
            {'@' + userData.username}
          </p>
          <p className="text-gray-500 text-sm">{createdAtDate}</p>
        </div>

        <p className="text-gray-600 mt-4">{body}</p>

        {image && (
          <div className="border bg-white border-gray-200 rounded-xl mt-4 mx-auto max-w-[542px]">
            <Image
              src={image}
              alt="Post Image"
              className="max-h-80 rounded-lg object-contain"
              width={542}
              height={320}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostContent;
