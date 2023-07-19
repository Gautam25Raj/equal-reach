import { useCallback } from 'react';
import { AppDispatch } from '@/store/store';
import { useDispatch } from 'react-redux';
import { openLoginModal } from '@/store/slice/modalSlice';

const useOpenLoginModal = () => {
  const dispatch = useDispatch<AppDispatch>();

  const openModal = useCallback(() => {
    dispatch(openLoginModal());
  }, [dispatch]);

  return openModal;
};
export default useOpenLoginModal;
