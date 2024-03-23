import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Icons } from '@/assets/icons';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { HStack } from '@/components/ui/Utilities';
import { cn } from '@/lib/utils';
import { ROUTE } from '@/types';

import { SIDEBAR_DATA } from './const';

const Sidebar = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const pathname = usePathname();

  return (
    <>
      <HStack spacing={24}>
        <Button variant="ghost" size="mixin" onClick={toggle}>
          <Icons.menu />
        </Button>
      </HStack>
      <Sheet open={opened} onOpenChange={toggle}>
        <SheetContent className="bg-background max-w-sm">
          <SheetHeader>
            <SheetTitle>
              <Link href={ROUTE.HOME}>
                <Icons.logo />
              </Link>
            </SheetTitle>
            <SheetDescription>
              <div className="flex flex-col gap-2">
                {SIDEBAR_DATA?.map((item, index) => (
                  <Link
                    className={cn('text-2xl font-semibold text-black cursor-pointer hover:opacity-50', {
                      'text-primary hover:opacity-100 cursor-default': item.route === pathname,
                    })}
                    key={index}
                    href={item.route}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Sidebar;
