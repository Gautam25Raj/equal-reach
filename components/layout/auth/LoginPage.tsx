'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { toast } from 'react-hot-toast';

import Modal from '../Modal';
import Input from '@/components/ui/Input';
import { FormButton } from '@/components/ui/Button';

const LoginPage = () => {
  const [username, setUsername] = useState('TestUser');
  const [email, setEmail] = useState('testuser@equalreach.com');
  const [password, setPassword] = useState('12345678');

  const router = useRouter();

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
          setUsername('');
          setEmail('');
          setPassword('');

          router.push('/feed');
        }
      }),
      {
        loading: 'Logging In...',
        success: <b>Logged in successfully!</b>,
        error: <b>Try again!</b>,
      }
    );
  };

  const footer = (
    <div className="text-center z-10 mt-5">
      <p>
        {"Don't have an Account? "}
        <button
          className="text-rainbow hover:scale-105 hover:font-semibold transition-transform duration-200"
          onClick={() => router.push('/register')}
        >
          Sign In
        </button>
      </p>
    </div>
  );

  return (
    <Modal title="Login" isOpen={true} footer={footer} actionLabel="Sign in">
      <>
        <button
          className="flex mx-auto mb-10 items-center rounded-md py-3 px-4 transition-all duration-300 ease-in-ou bg-gray-100 hover:bg-gray-200"
          onClick={() => signIn('github')}
        >
          <Image
            className="mr-2"
            src="/home/svg/github.svg"
            alt="GitHub"
            width="20"
            height="20"
          />
          Sign in with GitHub
        </button>

        <div className="flex items-center justify-center">
          <span className="h-0.5 flex-1 bg-gray-100"></span>
          <span className="text-gray-400 px-2">or</span>
          <span className="h-0.5 flex-1 bg-gray-100"></span>
        </div>

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

export default LoginPage;
