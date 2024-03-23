import React from 'react';

import { type NextPageWithLayout } from '@/types';

const SignInPage: NextPageWithLayout = () => {
  return <div>SignInPage</div>;
};

export default SignInPage;

SignInPage.getLayout = (page) => {
  return <>{page}</>;
};
