import React from 'react';

import TitlePageLayout from '@/components/TitlePageLayout';
import type { NextPageWithLayout } from '@/types';

const LandingPage: NextPageWithLayout = () => {
  return <TitlePageLayout title="Dashboard"></TitlePageLayout>;
};

export default LandingPage;
