import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import Game from "../entities/Game";
import APIClient, { FetchResponse } from "../services/api-client";

const apiClient = new APIClient<Game>('/games');

/**
 * We are Using a generic data fetching hook, called useData()
 * @returns Game[]
 */
const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () => apiClient.getAll({
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    }),
  })

export default useGames;
