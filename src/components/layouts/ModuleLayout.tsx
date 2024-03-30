import NextNProgress from 'nextjs-progressbar';
import React, { memo } from 'react';

import type { FCC } from '@/types';

import { TailwindIndicator } from '../TailwindIndicator';

const ModuleLayout: FCC = ({ children }) => {
  return (
    <>
      {children}
      <TailwindIndicator />
      <NextNProgress color="#FF9966" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={false} />
    </>
  );
};

export default memo(ModuleLayout);
