'use client';

import { useSession } from 'next-auth/react';
import {
  HandRaisedIcon as Like,
  ChatBubbleBottomCenterIcon as ChatAlt2Icon,
  ArrowUpTrayIcon as UploadIcon,
  ArrowsRightLeftIcon as SwitchHorizontalIcon,
} from '@heroicons/react/24/outline';
import { HandRaisedIcon as LikeSolid } from '@heroicons/react/24/solid';

import Comment from './Comment';
import PostContent from './PostContent';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import useLike from '@/hooks/useLike';
import useCurrentUser from '@/hooks/useCurrentUser';

interface PostProps {
  post: Record<string, any>;
  currentUserId: string;
}

const Post = ({ post, currentUserId }: PostProps) => {
  const image = true;
  const { body, comments, createdAt, id, likedIds, user, userId } = post;
  const router = useRouter();
  const { hasLiked, toggleLike } = useLike(id, userId, currentUserId);

  const goToUserProfile = (e: any) => {
    e.stopPropagation();

    router.push(`/feed/profile/${userId}`);
  };

  const goToPost = (e: any) => {
    e.stopPropagation();

    router.push(`/posts/${id}`);
  };

  const onLike = useCallback(
    (e: any) => {
      e.stopPropagation();

      toggleLike();
    },
    [toggleLike]
  );

  const LikedIcon = hasLiked ? (
    <LikeSolid className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150 text-red-500" />
  ) : (
    <Like className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150 hover:text-red-500" />
  );

  return (
    <div
      className="flex flex-col space-x-3 border-b border-gray-200 p-5 cursor-pointer hover:bg-gray-50 transition"
      onClick={goToPost}
    >
      <PostContent
        userId={userId}
        image={image}
        userData={user}
        body={body}
        createdAt={createdAt}
      />

      <div className="mt-5 flex">
        <div
          className="flex cursor-pointer items-center space-x-3 text-gray-400"
          onClick={onLike}
        >
          {LikedIcon}
          <p>{likedIds?.length}</p>
        </div>

        <div className="flex cursor-pointer items-center space-x-3 text-gray-400 ml-12">
          <ChatAlt2Icon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
          <p>{comments?.length}</p>
        </div>
      </div>

      {comments?.length > 0 && <Comment comments={comments} />}
    </div>
  );
};
export default Post;
