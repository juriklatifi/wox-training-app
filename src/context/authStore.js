import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useAuthStore = create(persist(
  (set) => ({
    authenticated: false,
    user: null, // Initialize user data as null
    login: (user) => set(() => ({authenticated: true , user}  )),
    logout: () => set(() => ({ authenticated: false, user: null })),
  }),
  {
    name: 'auth-storage',
    storage: createJSONStorage(() => sessionStorage)
  }
));
