import { create } from "zustand";
import { mountStoreDevtool } from 'simple-zustand-devtools';

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
  setGenreId: (genreId) => set((store) => ({
    gameQuery: { ...store.gameQuery, genreId, searchText: undefined },
  })),
  setPlatformId: (platformId) => set((store) => ({
    gameQuery: {
      ...store.gameQuery,
      platformId,
      searchText: undefined,
    },
  })),
  setSortOrder: (sortOrder: string) => set((store) => ({
    gameQuery: { ...store.gameQuery, sortOrder },
  })),
}));

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('GameQueryStore', useGameQueryStore);
}

export default useGameQueryStore;
