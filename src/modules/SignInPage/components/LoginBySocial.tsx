import React from 'react';

import { Icons } from '@/assets/icons';
import { HStack } from '@/components/ui/Utilities';

const LoginBySocial = () => {
  return (
    <HStack spacing={16} align={'default'} className="w-full">
      <button className="flex-1 rounded-full bg-white py-2 flex justify-center items-center">
        <Icons.google width={24} height={24} />
      </button>

      <button className="flex-1 rounded-full bg-white py-2 flex justify-center items-center">
        <Icons.facebook width={32} height={32} fill="#058dd0" />
      </button>
    </HStack>
  );
};

export default LoginBySocial;
