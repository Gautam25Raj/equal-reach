import usePost from '@/hooks/usePost';
import usePosts from './usePosts';
import { useCallback } from 'react';
import { toast } from 'react-hot-toast';
import axios from 'axios';

const useLike = (postId: string, userId: string, currentUserId: string) => {
  const { data: post, mutate: mutatePost } = usePost(postId);
  const { mutate: mutatePosts } = usePosts();

  const list = post?.likedIds || [];
  let hasLiked = list.includes(currentUserId);

  const toggleLike = useCallback(async () => {
    try {
      let request;

      if (hasLiked) {
        request = () =>
          axios.delete('/api/like', {
            data: {
              postId,
              currentUserId,
            },
          });
      } else {
        request = () =>
          axios.post('/api/like', {
            postId,
            currentUserId,
          });
      }

      await request();

      mutatePost();
      mutatePosts();
      if (hasLiked) toast.success('Unliked!');
      else toast.success('Liked!');
    } catch (error) {
      toast.error('Something went wrong!');
    }
  }, [postId, hasLiked, currentUserId, mutatePost, mutatePosts]);

  return { hasLiked, toggleLike };
};

export default useLike;
