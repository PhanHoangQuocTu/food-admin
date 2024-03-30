import { createSelectorFunctions } from 'auto-zustand-selectors-hook';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import type { ILoginResponse, IUser } from '@/api/auth';

export interface IMeQueryStore {
  user: IUser | null;
  accessToken: string;
  refreshToken?: string;
  setStore: (data: ILoginResponse) => void;
  setUser: (data: IUser) => void;
  setAccessToken: (data: string) => void;
  logout: () => void;
}

const useBaseUserStore = create<IMeQueryStore>()(
  persist(
    (set) => ({
      accessToken: '',
      refreshToken: undefined,
      user: null,
      setStore: (data) => set((_) => data),
      setUser: (data) => set((state) => ({ ...state, user: data })),
      setAccessToken: (data) => set((state) => ({ ...state, accessToken: data })),
      logout: () => set(() => ({ accessToken: '', refreshToken: undefined, user: null })),
    }),
    {
      name: 'user-store',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export const useUserStore = createSelectorFunctions(useBaseUserStore);
