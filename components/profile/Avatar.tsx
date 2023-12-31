'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface AvatarProps {
  userId?: string;
  isLarge?: boolean;
  hasBorder?: boolean;
  profileImage?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  userId,
  profileImage,
  isLarge,
  hasBorder,
}) => {
  const router = useRouter();

  const handleAvatarClick = (e: any) => {
    e.stopPropagation();

    router.push(`/feed/profile/${userId}`);
  };

  return (
    <div
      className={`${hasBorder ? 'border-4 border-gray-600' : ''} ${
        isLarge ? 'h-32 w-32' : 'w-12 h-12'
      } rounded-full transition cursor-pointer relative hover:opacity-90`}
    >
      <Image
        src={profileImage || '/user/placeholder.png'}
        alt="Profile picture"
        onClick={handleAvatarClick}
        className="object-cover rounded-full"
        fill
      />
    </div>
  );
};

export default Avatar;
