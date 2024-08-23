import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  slug: string;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

// interface FetchGamesResponse {
//   count: number;
//   results: Game[];
// }

// const useGames = () => {
//   const [games, setGames] = useState<Game[]>([]);
//   const [error, setError] = useState<string>("");
//   const [loading, setLoading] = useState<boolean>(false);

//   useEffect(() => {
//     const controller = new AbortController();

//     setLoading(true);

//     apiClient
//       .get<FetchGamesResponse>("/games", { signal: controller.signal })
//       .then((response) => setGames(response.data.results))
//       .catch((error) => {
//         if (error instanceof CanceledError) {
//           return console.log("Request was canceled");
//         }

//         setError(error.message);
//       })
//       .finally(() => setLoading(false));

//     return () => controller.abort();
//   }, []);

//   // we return the state and the setter functions so that the component can use them
//   return { games, error, loading };
// };

/**
 * We are Using a generic data fetching hook, called useData()
 * @returns Game[]
 */
const useGames = () => useData<Game>("/games");

export default useGames;
