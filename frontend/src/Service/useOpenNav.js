import { create } from 'zustand';

const useOpenNav = create((set) => ({

  navState: false,
  handleNav: () => set((state) => ({ navOpened: !state.navOpened }))
}));


export default useOpenNav;
