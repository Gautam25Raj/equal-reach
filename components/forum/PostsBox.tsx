'use client';

import { useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import Image from 'next/image';
import { PhotoIcon, TrashIcon } from '@heroicons/react/24/outline';
import axios from 'axios';
import ImageUpload from '../ui/ImageUpload';

import useUser from '@/hooks/useUser';
import usePosts from '@/hooks/usePosts';
import { toast } from 'react-hot-toast';
import { set } from 'date-fns';

interface PostsBoxProps {
  userId: string;
}

const PostsBox = ({ userId }: PostsBoxProps) => {
  const { data: user, isLoading } = useUser(userId);
  const { mutate: mutatePosts } = usePosts();
  const [postImage, setPostImage] = useState('');
  const [isOpenImage, setIsOpenImage] = useState(false);

  const [body, setBody] = useState('');

  if (isLoading || !user) {
    return (
      <div className="flex justify-center items-center  py-24 border-b border-gray-200">
        <ClipLoader color="text-yellow-600" size={30} />
      </div>
    );
  }

  const handlePost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      let updatePost = axios.post(`/api/posts/users/${userId}`, {
        body,
        image: postImage ? postImage : null,
      });

      await toast.promise(updatePost, {
        loading: 'Uploading...',
        success: <b>Post uploaded successfully!</b>,
        error: <b>Something went wrong.</b>,
      });

      setBody('');
      setPostImage('');
      setIsOpenImage(false);
      mutatePosts();
    } catch (error) {
      toast.error('Something went wrong!');
    }
  };

  return (
    <div className="flex space-x-2 p-5 border-b border-gray-200">
      <Image
        src={user?.profileImage || '/user/placeholder.png'}
        alt="Profile Photo"
        className="mt-4 h-14 w-14 rounded-full object-cover"
        width={40}
        height={40}
      />

      <div className="flex flex-1 items-center pl-2">
        <form className="flex flex-1 flex-col" onSubmit={handlePost}>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="What's happening?"
            className="h-36 py-5 w-full text-xl outline-none placeholder:text-xl no-scrollbar no-scrollbar::-webkit-scrollbar"
          />

          {isOpenImage && (
            <div className="relative">
              <ImageUpload
                value={postImage}
                onChange={(image) => setPostImage(image)}
                disabled={isLoading}
                label="Upload Profile Image"
                alt="Profile Image"
              />

              <TrashIcon
                className="absolute top-1/2 -translate-y-1/2 right-2 w-6 h-6 text-red-400 cursor-pointer z-20"
                onClick={() => setPostImage('')}
              />
            </div>
          )}

          <div className="flex items-center">
            <div
              className="flex flex-1 space-x-2 text-twitter"
              onClick={() => setIsOpenImage(!isOpenImage)}
            >
              <PhotoIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150 hover:text-twitter-hover" />
            </div>

            <button
              disabled={!body}
              className="btn-rainbow rounded-full px-5 py-2 font-bold text-white hover:scale-105 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default PostsBox;
