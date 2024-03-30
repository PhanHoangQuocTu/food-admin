import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

import { Icons } from '@/assets/icons';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { HStack } from '@/components/ui/Utilities';
import { useAuth } from '@/hooks/useAuth';
import { cn } from '@/lib/utils';
import { useUserStore } from '@/stores';
import { ROUTE } from '@/types';

import Sidebar from './Sidebar';

const Header = () => {
  const { isLoggedIn } = useAuth();
  const user = useUserStore.use.user();
  const logout = useUserStore.use.logout();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.replace(ROUTE.SIGN_IN);
  };

  return (
    <header
      className={cn(
        'h-header bg-secondary sticky left-0 right-0 top-0 z-50 flex w-full items-center justify-between py-4'
      )}
    >
      <div className={'container flex items-center justify-between'}>
        <HStack spacing={20}>
          <Sidebar />

          <Link href={ROUTE.HOME}>
            <Icons.logo />
          </Link>
        </HStack>
        {!isLoggedIn ? (
          <Button>
            <Link href={ROUTE.SIGN_IN}>Sign In</Link>
          </Button>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="text-base font-medium">Hello, {user?.lastName}</button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="p-0">
              <button
                onClick={handleLogout}
                className="w-full text-left py-1 px-2 hover:bg-primary hover:opacity-80 hover:text-white"
              >
                Log out
              </button>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </header>
  );
};

export default Header;
