import PageHeader from '@/components/layout/PageHeader';

import Post from './Post';
import PostsBox from './PostsBox';

const Feed = () => {
  return (
    <div className="col-span-10 lg:col-span-6 h-screen no-scrollbar no-scrollbar::-webkit-scrollbar overflow-y-auto border-x border-gray-200">
      <PageHeader title="Feeds" isRefresh={true} opacity />

      <PostsBox />
      <Post />
    </div>
  );
};
export default Feed;
