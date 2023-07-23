import Image from 'next/image';
import TimeAgo from 'react-timeago';

interface PostContentProps {
  image: boolean;
}

const PostContent = ({ image }: PostContentProps) => {
  return (
    <div className="flex space-x-3">
      <Image
        src="/favicon.ico"
        alt="Profile Photo"
        className="h-10 w-10 rounded-full object-cover"
        width={40}
        height={40}
      />

      <div className="w-full">
        <div className="flex items-center space-x-1">
          <p className="mr-1 font-bold">Gautam Raj</p>
          <p className="hidden text-sm text-gray-500 sm:block">@noober_boy</p>

          {/* <TimeAgo className="text-sm text-gray-500" date={new Date()} /> */}
        </div>

        <p>Post Text</p>

        {image && (
          <img
            src="/favicon.ico"
            alt="Post Image"
            className="m-5 ml-0 mb-1 max-h-60 rounded-lg object-cover shadow-sm"
          />
        )}
      </div>
    </div>
  );
};
export default PostContent;
