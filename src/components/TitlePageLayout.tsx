import React from 'react';

import { type FCC } from '@/types';

import { VStack } from './ui/Utilities';

interface Props {
  title: string;
}
const TitlePageLayout: FCC<Props> = ({ children, title }) => {
  return (
    <VStack spacing={20} className="min-h-screen container py-8">
      <span className="text-3xl font-semibold">{title}</span>
      {children}
    </VStack>
  );
};

export default TitlePageLayout;
