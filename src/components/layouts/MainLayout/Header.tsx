import Link from 'next/link';
import React from 'react';

import { Icons } from '@/assets/icons';
import { Button } from '@/components/ui/button';
import { HStack } from '@/components/ui/Utilities';
import { cn } from '@/lib/utils';
import { ROUTE } from '@/types';

import Sidebar from './Sidebar';

const Header = () => {
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

        <Button>
          <Link href={ROUTE.SIGN_IN}>Sign In</Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
