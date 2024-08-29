import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import Game from "../entities/Game";
import APIClient, { FetchResponse } from "../services/api-client";

const apiClient = new APIClient<Game>('/games');

/**
 * We are Using a generic data fetching hook, called useData()
 * @returns Game[]
 */
const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam }) => apiClient.getAll({
      params: {
        genres: gameQuery.genreId,
        parent_platforms: gameQuery.platformId,
        search: gameQuery.searchText,
        ordering: gameQuery.sortOrder,
        page: pageParam,
      },
    }),
    initialPageParam: 1,
    // placeholderData: keepPreviousData,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: 1000 * 60 * 60 * 24, // 24 Hours
  })

export default useGames;
