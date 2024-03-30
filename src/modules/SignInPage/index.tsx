import Image from 'next/image';
import { useRouter } from 'next/navigation';
import bgAuth from 'public/images/auth/background-auth.webp';
import React, { useEffect } from 'react';

import { useAuth } from '@/hooks/useAuth';
import { type NextPageWithLayout, ROUTE } from '@/types';

import LoginForm from './components/LoginForm';

const SignInPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (isLoggedIn) {
      router.replace(ROUTE.HOME);
    }
  }, [isLoggedIn, router]);

  return (
    <div className="min-h-screen relative flex justify-center items-center">
      <Image src={bgAuth} fill alt="background auth" className="z-0" unoptimized priority />
      <LoginForm />
    </div>
  );
};

export default SignInPage;

SignInPage.getLayout = (page) => {
  return <>{page}</>;
};
