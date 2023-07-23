import Avatar from './Avatar';
import Image from 'next/image';

interface ProfileProps {
  coverImage: string;
  userId: string;
  profileImage: string;
}

const ProfileHero = ({ coverImage, userId, profileImage }: ProfileProps) => {
  return (
    <section>
      <div className="bg-gray-300 h-44 relative">
        {coverImage && (
          <Image src={coverImage} fill alt="Cover Image" objectFit="cover" />
        )}

        <div className="absolute -bottom-16 left-4">
          <Avatar
            userId={userId}
            profileImage={profileImage}
            isLarge
            hasBorder
          />
        </div>
      </div>
    </section>
  );
};

export default ProfileHero;
