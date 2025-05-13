import { create } from 'zustand';

const useNavStore = create((set) => ({
  navOpened: false,
  openNav: () => set((state) => ({ navOpened: true })),
  closeNav: () => set((state) => ({ navOpened: false }))
}));


export default useNavStore;
