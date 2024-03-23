import React from 'react';

import TitlePageLayout from '@/components/TitlePageLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { HStack } from '@/components/ui/Utilities';

const ProductManagementPage = () => {
  return (
    <TitlePageLayout title="Product Management">
      <HStack pos={'apart'}>
        <Input placeholder="Search" className="min-w-96" />

        <Button>Create Product</Button>
      </HStack>
    </TitlePageLayout>
  );
};

export default ProductManagementPage;
