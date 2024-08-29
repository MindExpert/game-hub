import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import Game from "../entities/Game";
import apiClient, { FetchResponse } from "../services/api-client";

/**
 * We are Using a generic data fetching hook, called useData()
 * @returns Game[]
 */
const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () => apiClient.get<FetchResponse<Game>>("/games", {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    }).then((res) => res.data),
  })

export default useGames;
