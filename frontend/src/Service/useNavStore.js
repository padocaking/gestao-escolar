import { create } from 'zustand';

const useNavStore = create((set) => ({

  navOpened: false,
  handleNav: () => set((state) => ({ navOpened: !state.navOpened })),

  subOpened: false,
  handleSub: () => set((state) => ({ subOpened: !state.subOpened })),
  closeSub: () => set(() => ({ subOpened: false})),
}));


export default useNavStore;
