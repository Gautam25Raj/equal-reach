import Image from 'next/image';
import Avatar from '../profile/Avatar';

interface PostContentProps {
  image: boolean;
  userData: Record<string, any>;
  body: string;
  userId: string;
}

const PostContent = ({ image, userData, body, userId }: PostContentProps) => {
  return (
    <div className="flex space-x-3">
      <Avatar profileImage={userData.profileImage} userId={userId} />

      <div className="w-full">
        <div className="flex items-center space-x-1">
          <p className="font-bold text-rainbow">{userData.name}</p>
          <p className="hidden text-sm text-gray-500 sm:block">
            {'@' + userData.username}
          </p>
        </div>

        <p className="text-gray-600 mt-4">{body}</p>

        {image && (
          <div className="border border-gray-200 rounded-xl mt-4">
            <Image
              src="/favicon.ico"
              alt="Post Image"
              className="m-5 ml-0 mb-1 max-h-60 rounded-lg object-contain"
              width={552}
              height={240}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostContent;
