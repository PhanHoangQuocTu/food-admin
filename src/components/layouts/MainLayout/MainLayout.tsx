import { useRouter } from 'next/navigation';
import type { ReactNode } from 'react';
import React, { useEffect } from 'react';

import { useAuth } from '@/hooks/useAuth';
import { type FCC, ROUTE } from '@/types';

import Footer from './Footer';
import Header from './Header';

interface Props {
  children: ReactNode;
}

const MainLayout: FCC<Props> = ({ children }) => {
  const router = useRouter();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (!isLoggedIn) {
      router.replace(ROUTE.SIGN_IN);
    }
  }, [isLoggedIn, router]);

  return (
    <div className="overflow-clip">
      <div>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
