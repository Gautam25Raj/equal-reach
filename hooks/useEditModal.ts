import { useCallback } from 'react';
import { AppDispatch } from '@/store/store';
import { useDispatch } from 'react-redux';
import { openEditModal } from '@/store/slice/modalSlice';

const useEditModal = () => {
  const dispatch = useDispatch<AppDispatch>();

  const openModal = useCallback(() => {
    dispatch(openEditModal());
  }, [dispatch]);

  return openModal;
};
export default useEditModal;
