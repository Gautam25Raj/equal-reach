import usePosts from '@/hooks/usePosts';
import ClipLoader from 'react-spinners/ClipLoader';
import Post from './Post';

const PostsFeed = () => {
  const { data: posts = [], isLoading } = usePosts();

  if (isLoading || !posts) {
    return (
      <div className="flex justify-center items-center  py-24">
        <ClipLoader color="text-yellow-600" size={30} />
      </div>
    );
  }

  return (
    <>
      {posts.map((post: Record<string, any>) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};
export default PostsFeed;
