'use client';

import {
  HandRaisedIcon as Like,
  ChatBubbleBottomCenterIcon as ChatAlt2Icon,
} from '@heroicons/react/24/outline';
import { HandRaisedIcon as LikeSolid } from '@heroicons/react/24/solid';

import Comment from './Comment';
import PostContent from './PostContent';
import { useCallback, useState } from 'react';
import useLike from '@/hooks/useLike';
import Link from 'next/link';

interface PostProps {
  post: Record<string, any>;
  currentUserId: string;
  isOpenComment?: boolean;
}

const Post = ({ post, currentUserId, isOpenComment }: PostProps) => {
  const image = post.image ? post.image : null;
  const { body, comments, createdAt, id, likedIds, user, userId } = post;
  const { hasLiked, toggleLike } = useLike(id, userId, currentUserId);
  const [isComment, setIsComment] = useState(isOpenComment);

  const onLike = useCallback(
    (e: any) => {
      e.stopPropagation();

      toggleLike();
    },
    [toggleLike]
  );

  const toggleComments = (e: any) => {
    e.stopPropagation();

    setIsComment((prev) => !prev);
  };

  const LikedIcon = hasLiked ? (
    <LikeSolid className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out group-hover:scale-150 text-red-500" />
  ) : (
    <Like className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out group-hover:scale-150 hover:text-red-500" />
  );

  return (
    <div className="flex flex-col space-x-3 border-b border-gray-200 cursor-pointer transition">
      <PostContent
        id={id}
        userId={userId}
        image={image}
        userData={user}
        body={body}
        createdAt={createdAt}
      />

      <div className="my-4 mx-5 flex">
        <div
          className="flex cursor-pointer items-center space-x-3 text-gray-400 p-1 group"
          onClick={onLike}
        >
          {LikedIcon}
          <p>{likedIds?.length + ' Supports'}</p>
        </div>

        <div
          className="flex cursor-pointer items-center space-x-3 text-gray-400 ml-11 group p-1"
          onClick={toggleComments}
        >
          <ChatAlt2Icon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out group-hover:scale-150" />
          <p>{comments?.length + ' Comments'}</p>
        </div>
      </div>

      {isComment && (
        <div className="my-2 mt-5 max-h-60 space-y-5 no-scrollbar no-scrollbar::-webkit-scrollbar overflow-y-scroll border-t border-gray-100 p-5">
          {comments?.length > 0 ? (
            comments.map((comment: any, i: any) => (
              <Comment
                key={comment.id}
                id={comment.id}
                body={comment.body}
                postId={comment.postId}
                createdAt={comment.createdAt}
                updatedAt={comment.updatedAt}
                user={comment.user}
              />
            ))
          ) : (
            <div className="flex">
              <p className="text-gray-600">No Comments to Show: </p>
              <Link href={`/posts/${id}`} className="underline">
                Be the first to comment.
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default Post;
