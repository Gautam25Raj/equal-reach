'use client';

import usePosts from '@/hooks/usePosts';
import ClipLoader from 'react-spinners/ClipLoader';
import Post from './Post';
import { useState, useEffect } from 'react';

interface PostsFeedProps {
  userId?: string;
  currentUserId: string;
}

const PostsFeed = ({ userId, currentUserId }: PostsFeedProps) => {
  const [allPosts, setAllPosts] = useState([]);
  const { data: posts = allPosts, isLoading } = usePosts(userId);

  useEffect(() => {
    setAllPosts(posts);
    console.log(allPosts);
  }, [posts, allPosts]);

  if (isLoading || !posts) {
    return (
      <div className="flex justify-center items-center  py-24">
        <ClipLoader color="text-yellow-600" size={30} />
      </div>
    );
  }

  if (allPosts.length === 0)
    return (
      <div className="text-gray-600 text-center mt-10">No Posts to Show</div>
    );

  return (
    <>
      {allPosts.map((post: Record<string, any>) => (
        <Post
          key={post.id}
          post={post}
          currentUserId={currentUserId}
          isOpenComment={false}
        />
      ))}
    </>
  );
};
export default PostsFeed;
