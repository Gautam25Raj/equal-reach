'use client';

import axios from 'axios';
import Image from 'next/image';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import ClipLoader from 'react-spinners/ClipLoader';

import useUser from '@/hooks/useUser';
import usePosts from '@/hooks/usePosts';
import useLike from '@/hooks/useLike';

interface CommentBoxProps {
  userId: string;
}

const CommentBox = ({ userId }: CommentBoxProps) => {
  const { data: user, isLoading } = useUser(userId);
  const { mutate: mutatePosts } = usePosts();
  // const like = useLike('fksfjkjxfk', 'fksfjkjxfk');

  const [comment, setComment] = useState('');

  if (isLoading || !user) {
    return (
      <div className="flex justify-center items-center  py-24 border-b border-gray-200">
        <ClipLoader color="text-yellow-600" size={30} />
      </div>
    );
  }

  const handleComment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      let updatePost = axios.post(`/api/posts/users/${userId}`, { comment });

      await toast.promise(updatePost, {
        loading: 'Uploading...',
        success: <b>Comment uploaded successfully!</b>,
        error: <b>Something went wrong.</b>,
      });

      setComment('');
      mutatePosts();
    } catch (error) {
      toast.error('Something went wrong!');
    }
  };

  return (
    <div className="flex space-x-2 px-5 py-2 border-b border-gray-200">
      <Image
        src={user?.profileImage || '/user/placeholder.png'}
        alt="Profile Photo"
        className="mt-4 h-10 w-10 rounded-full object-cover"
        width={40}
        height={40}
      />

      <div className="flex flex-1 items-center pl-2">
        <form className="flex flex-1 flex-col" onSubmit={handleComment}>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Comment your reply..."
            className="h-16 my-5 w-full outline-none no-scrollbar no-scrollbar::-webkit-scrollbar"
          />

          <div className="flex items-center">
            <button
              disabled={!comment}
              type="submit"
              className="btn-rainbow rounded-full px-5 py-2 font-bold text-white hover:scale-105 disabled:opacity-40 ml-auto disabled:cursor-not-allowed"
            >
              Comment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CommentBox;
