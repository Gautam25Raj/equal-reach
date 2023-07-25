import { useMemo, useCallback } from 'react';
import useUser from './useUser';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import useCurrentUser from './useCurrentUser';

const useFollow = (userId: string) => {
  const { data: session } = useSession();
  const { data: currentUser, mutate: mutateCurrentUser } = useCurrentUser(
    session?.user?.email
  );
  const { mutate: mutateUser } = useUser(userId);

  const isFollowing = useMemo(() => {
    const list = currentUser?.followingIds || [];

    return list.includes(userId);
  }, [userId, currentUser]);

  const toggleFollow = useCallback(async () => {
    try {
      let request;

      if (isFollowing) {
        request = () =>
          axios.delete(`/api/follow`, {
            data: { userId: userId, currentUser: currentUser },
          });
      } else {
        request = () =>
          axios.post(`/api/follow`, {
            userId: userId,
            currentUser: currentUser,
          });
      }

      await request();

      mutateCurrentUser();
      mutateUser();

      if (isFollowing) toast.success('Unsupported successfully');

      toast.success('Supporting successfully');
    } catch (error) {
      toast.error('Something went wrong');
    }
  }, [isFollowing, userId, currentUser, mutateUser, mutateCurrentUser]);

  return {
    isFollowing,
    toggleFollow,
  };
};

export default useFollow;
