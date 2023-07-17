'use client';

import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useAppSelector } from '@/store/store';
import { AppDispatch } from '@/store/store';
import { closeLoginModal, openSignupModal } from '@/store/slice/modalSlice';
import Modal from '../Modal';
import Input from '@/components/ui/Input';

const LoginModal = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const isOpen = useAppSelector((state) => state.modalReducer.isLoginOpen);
  const dispatch = useDispatch<AppDispatch>();

  const handleLogin = useCallback(async () => {
    try {
      setIsLoading(true);

      dispatch(closeLoginModal());
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);

  const handleToggle = useCallback(() => {
    dispatch(closeLoginModal());
    dispatch(openSignupModal());
  }, [dispatch]);

  const footer = (
    <div className="text-center z-10">
      <p>
        {"Don't have an Account? "}
        <button
          className="text-rainbow hover:scale-105 hover:font-semibold transition-transform duration-200"
          onClick={handleToggle}
        >
          Sign Up
        </button>
      </p>
    </div>
  );

  return (
    <Modal
      title="Login"
      disabled={isLoading}
      isOpen={isOpen}
      footer={footer}
      actionLabel="Sign in"
      onSubmit={handleLogin}
    >
      <div className="flex flex-col gap-4">
        <Input
          type="text"
          disabled={false}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Email"
        />

        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={false}
        />
      </div>
    </Modal>
  );
};

export default LoginModal;
