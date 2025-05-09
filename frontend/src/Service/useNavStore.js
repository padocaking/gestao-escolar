import { create } from 'zustand';

const useNavStore = create((set) => ({
  subNavActive: false,
  openSubNav: () => set((state) => ({ subNavActive: !state.subNavActive })),
}));


export default useNavStore;
