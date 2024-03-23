import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';

import { FormWrapper } from '@/components/ui/form';

import { signInSchema, type SignInSchemaType } from '../types';

const LoginForm = () => {
  const form = useForm<SignInSchemaType>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const handleSubmit: SubmitHandler<SignInSchemaType> = (formData) => {
    console.log(formData);
  };

  return (
    <FormWrapper onSubmit={handleSubmit} form={form}>
      LoginForm
    </FormWrapper>
  );
};

export default LoginForm;
