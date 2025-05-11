import { create } from 'zustand';

const useNavStore = create((set) => ({
  navOpened: true,
  openNav: () => set((state) => ({ navOpened: !state.navOpened })),
}));


export default useNavStore;
