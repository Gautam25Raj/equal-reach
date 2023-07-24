import PageHeader from '@/components/layout/PageHeader';

import PostsFeed from './PostsFeed';
import PostsBox from './PostsBox';

interface FeedProps {
  userId: string;
}

const Feed = ({ userId }: FeedProps) => {
  return (
    <div className="col-span-10 lg:col-span-6">
      <PageHeader title="Feeds" isRefresh={true} opacity />

      <PostsBox userId={userId} />
      <PostsFeed />
    </div>
  );
};
export default Feed;
