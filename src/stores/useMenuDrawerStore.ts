import { create } from "zustand";
import { mountStoreDevtool } from 'simple-zustand-devtools';

interface MenuDrawerStore {
    isOpen: boolean;
    toggleMenuDrawer: () => void;
}

const useMenuDrawerStore = create<MenuDrawerStore>(set => ({
    isOpen: false,
    toggleMenuDrawer: () => set(state => ({ isOpen: !state.isOpen })),
}));

if (process.env.NODE_ENV === 'development') {
    mountStoreDevtool('MenuDrawerStore', useMenuDrawerStore);
}

export default useMenuDrawerStore;