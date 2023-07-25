'use client';

import { useParams } from 'next/navigation';
import { ClipLoader } from 'react-spinners';
import { useSession } from 'next-auth/react';
import useCurrentUser from '@/hooks/useCurrentUser';

import usePost from '@/hooks/usePost';

import PageHeader from '@/components/layout/PageHeader';
import Post from '@/components/forum/Post';
import CommentBox from '@/components/forum/CommentBox';

const Page = () => {
  const { postId } = useParams();
  const { data: session } = useSession();
  const { data: currentUser, isLoading: isUserLoading } = useCurrentUser(
    session?.user?.email
  );
  const { data: postData, isLoading } = usePost(postId);

  if (isLoading || isUserLoading || !postData || !currentUser) {
    return (
      <div className="col-span-10 lg:col-span-6 h-[90vh] md:h-screen border-x border-gray-200">
        <PageHeader title={'Posts'} isRefresh={true} opacity />

        <div className="flex justify-center items-center h-full -m-16">
          <ClipLoader color="color-pink-400" size={80} />
        </div>
      </div>
    );
  }

  return (
    <div className="col-span-10 lg:col-span-6 border-x border-gray-200">
      <PageHeader title={'Posts'} isRefresh={true} opacity />

      <Post currentUserId={currentUser.id} post={postData} />
      <CommentBox userId={postData.userId} />
    </div>
  );
};
export default Page;
