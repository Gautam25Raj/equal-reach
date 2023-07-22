'use client';

import useUser from '@/hooks/useUser';
import { useParams } from 'next/navigation';
import { ClipLoader } from 'react-spinners';

import PageHeader from '@/components/layout/PageHeader';
import ProfileHero from '@/components/profile/ProfileHero';
import ProfileAbout from '@/components/profile/ProfileAbout';

const UserView = () => {
  const router = useParams();
  const { userId } = router;

  const { data: userData, isLoading } = useUser(userId);

  if (isLoading || !userData) {
    return (
      <>
        <PageHeader title={'Profile'} isRefresh={true} opacity />

        <div className="flex justify-center items-center h-full -m-16">
          <ClipLoader color="text-yellow-600" size={80} />
        </div>
      </>
    );
  }

  console.log(userData);

  return (
    <>
      <PageHeader
        title={'Profile: ' + userData.username}
        isRefresh={true}
        opacity
      />

      <ProfileHero
        userId={userData.userId}
        coverImage={userData.coverImage}
        profileImage={userData.profileImage}
      />

      <ProfileAbout
        userId={userData.userId}
        userEmail={userData.email}
        userName={userData.name}
        userUsername={userData.username}
        userCreatedAt={userData.createdAt}
        userBio={userData.bio}
        userFollowers={userData.followersCount}
        userFollowing={userData.followingIds.length}
      />
    </>
  );
};

export default UserView;
