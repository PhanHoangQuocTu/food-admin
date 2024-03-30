import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import React from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { loginRequest } from '@/api/auth';
import { Button } from '@/components/ui/button';
import { FormWrapper } from '@/components/ui/form';
import { TextField } from '@/components/ui/FormField';
import { VStack } from '@/components/ui/Utilities';
import { isAdmin, onMutateError } from '@/lib/common';
import { useUserStore } from '@/stores';
import { ROUTE } from '@/types';

import { signInSchema, type SignInSchemaType } from '../types';
import LoginBySocial from './LoginBySocial';

const LoginForm = () => {
  const setUser = useUserStore.use.setUser();
  const setAccessToken = useUserStore.use.setAccessToken();
  const router = useRouter();
  const form = useForm<SignInSchemaType>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const { mutate: login, isLoading } = useMutation(loginRequest, {
    onSuccess: (data) => {
      const isAdminRole = isAdmin(data?.user?.roles);

      if (!isAdminRole) {
        toast.error("You don't have permission to access this page");
        return;
      }

      setUser(data?.user);
      setAccessToken(data?.accessToken);
      toast.success('Login successfully');
      router.replace(ROUTE.HOME);
    },
    onError: onMutateError,
  });

  const handleSubmit: SubmitHandler<SignInSchemaType> = (formData) => {
    login(formData);
  };

  return (
    <FormWrapper
      onSubmit={handleSubmit}
      form={form}
      className="relative z-10 p-10 bg-[#ffffff4d] backdrop-blur-sm rounded-md space-y-8 max-w-[29rem]"
    >
      <VStack spacing={24}>
        <span className="text-3xl font-semibold">Sign In</span>

        <TextField
          className="min-w-96"
          control={form.control}
          name="email"
          placeholder="Email"
          label="Email"
          size={'sm'}
        />

        <VStack spacing={8}>
          <TextField
            className="min-w-96"
            control={form.control}
            name="password"
            placeholder="Password"
            label="Password"
            type="password"
            size={'sm'}
          />
          <span className="text-xs">Forgot Password?</span>
        </VStack>

        <Button disabled={isLoading} type="submit">
          Sign In
        </Button>
      </VStack>

      <VStack spacing={12} align="center" className="w-full">
        <span className="text-sm font-medium">or continue with</span>

        <LoginBySocial />
      </VStack>
    </FormWrapper>
  );
};

export default LoginForm;
