'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  CalendarIcon,
  PhotoIcon,
  MagnifyingGlassCircleIcon,
  FaceSmileIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';

const PostsBox = () => {
  const [input, setInput] = useState<string>('');

  return (
    <div className="flex space-x-2 p-5">
      <Image
        src="/favicon.ico"
        alt="Profile Photo"
        className="mt-4 h-14 w-14 rounded-full object-cover"
        width={40}
        height={40}
      />

      <div className="flex flex-1 items-center pl-2">
        <form className="flex flex-1 flex-col">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="What's happening?"
            className="h-24 py-5 w-full text-xl outline-none placeholder:text-xl no-scrollbar no-scrollbar::-webkit-scrollbar"
          />

          <div className="flex items-center">
            <div className="flex flex-1 space-x-2 text-twitter">
              <PhotoIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150 hover:text-twitter-hover" />
              <MagnifyingGlassCircleIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150 hover:text-twitter-hover" />
              <FaceSmileIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150 hover:text-twitter-hover" />
              <CalendarIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150 hover:text-twitter-hover" />
              <MapPinIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150 hover:text-twitter-hover" />
            </div>

            <button
              disabled={!input}
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
