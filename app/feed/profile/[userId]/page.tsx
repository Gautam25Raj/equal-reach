'use client';

import useUser from '@/hooks/useUser';
import { useParams } from 'next/navigation';
import { ClipLoader } from 'react-spinners';

import PageHeader from '@/components/layout/PageHeader';
import ProfileHero from '@/components/profile/ProfileHero';
import ProfileAbout from '@/components/profile/ProfileAbout';
import PostsFeed from '@/components/forum/PostsFeed';

const UserView = () => {
  const router = useParams();
  const { userId } = router;

  const { data: userData, isLoading } = useUser(userId);

  if (isLoading || !userData) {
    return (
      <>
        <PageHeader title={'Profile'} opacity />

        <div className="flex justify-center items-center h-full -m-16">
          <ClipLoader color="text-yellow-600" size={80} />
        </div>
      </>
    );
  }

  return (
    <>
      <PageHeader title={'Profile: ' + userData.username} opacity />

      <ProfileHero
        userId={userData.id}
        coverImage={userData.coverImage}
        profileImage={userData.profileImage}
      />

      <ProfileAbout
        userId={userData.id}
        userEmail={userData.email}
        userName={userData.name}
        userUsername={userData.username}
        userCreatedAt={userData.createdAt}
        userBio={userData.bio}
        userFollowers={userData.followersIds.length}
        userFollowing={userData.followingIds.length}
      />

      <PostsFeed currentUserId={userId} userId={userData.id} />
    </>
  );
};

export default UserView;
