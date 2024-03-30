import { useUserStore } from '@/stores';

/**
 * * Override useSession to have more clean code
 * @returns session with isLoggedIn to check auth
 */
export const useAuth = () => {
  const user = useUserStore.use.user();
  const accessToken = useUserStore.use.accessToken();

  return {
    isLoggedIn: !!user && !!accessToken,
    user,
  };
};
