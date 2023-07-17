import { useCallback } from 'react';
import { AppDispatch } from '@/store/store';
import { useDispatch } from 'react-redux';
import { openSignupModal } from '@/store/slice/modalSlice';

const useSignupModal = () => {
  const dispatch = useDispatch<AppDispatch>();

  const openModal = useCallback(() => {
    dispatch(openSignupModal());
  }, [dispatch]);

  return openModal;
};
export default useSignupModal;
