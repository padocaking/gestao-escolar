import { create } from 'zustand';

const useNavStore = create((set) => ({

  navOpened: true,
  openNav: () => set(() => ({ navOpened: true })),
  closeNav: () => set(() => ({ navOpened: false, subOpened: false })),

  subOpened: false,
  handleSub: () => set((state) => ({ subOpened: !state.subOpened })),
  closeSub: () => set(() => ({ subOpened: false})),
}));


export default useNavStore;
