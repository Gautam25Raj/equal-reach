'use client';

import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from 'next-auth/react';
import { toast } from 'react-hot-toast';

import { useAppSelector } from '@/store/store';
import { AppDispatch } from '@/store/store';
import { closeLoginModal, openSignupModal } from '@/store/slice/modalSlice';

import Modal from '../Modal';
import Input from '@/components/ui/Input';
import { FormButton } from '@/components/ui/Button';

const LoginModal = () => {
  const [username, setUsername] = useState('TestUser');
  const [email, setEmail] = useState('testuser@equalreach.com');
  const [password, setPassword] = useState('equalreach1234');

  const isOpen = useAppSelector((state) => state.modalReducer.isLoginOpen);
  const dispatch = useDispatch<AppDispatch>();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await toast.promise(
      signIn('credentials', {
        username,
        email,
        password,
        redirect: false,
      }).then((callback) => {
        if (callback?.error) {
          toast.error(callback.error);
          throw new Error(callback.error);
        } else if (callback?.ok) {
          dispatch(closeLoginModal());
          setUsername('');
          setEmail('');
          setPassword('');
        }
      }),
      {
        loading: 'Logging In...',
        success: <b>Logged in successfully!</b>,
        error: <b>Try again!</b>,
      }
    );
  };

  const handleToggle = useCallback(() => {
    dispatch(closeLoginModal());
    dispatch(openSignupModal());
  }, [dispatch]);

  const footer = (
    <div className="text-center z-10 mt-5">
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
    <Modal title="Login" isOpen={isOpen} footer={footer} actionLabel="Sign in">
      <>
        <form className="flex flex-col gap-4 mt-10" onSubmit={handleLogin}>
          <Input
            type="text"
            placeholder="Username"
            disabled={false}
            required={true}
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />

          <Input
            type="text"
            placeholder="Email"
            disabled={false}
            required={true}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={false}
          />

          <div className="flex flex-col gap-2 py-5">
            <FormButton type="submit" label="Log In" fullWidth />
          </div>
        </form>
      </>
    </Modal>
  );
};

export default LoginModal;
