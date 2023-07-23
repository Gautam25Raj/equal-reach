import PageHeader from '@/components/layout/PageHeader';

import Post from './Post';
import PostsBox from './PostsBox';

interface FeedProps {
  userId: string;
}

const Feed = ({ userId }: FeedProps) => {
  return (
    <div className="col-span-10 lg:col-span-6 h-screen no-scrollbar no-scrollbar::-webkit-scrollbar overflow-y-auto border-x border-gray-200">
      <PageHeader title="Feeds" isRefresh={true} opacity />

      <PostsBox userId={userId} />
      <Post />
    </div>
  );
};
export default Feed;
