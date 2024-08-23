import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client";

export interface Game {
    id: number;
    slug: string;
    name: string;
    background_image: string;
}

interface FetchGamesResponse {
    count: number;
    results: Game[];
}

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const controller = new AbortController();

        apiClient.get<FetchGamesResponse>("/games", { signal: controller.signal })
            .then((response) => setGames(response.data.results))
            .catch((error) => {
                if (error instanceof CanceledError) {
                    return console.log('Request was canceled');
                }

                setError(error.message);
            })
            .finally(() => setLoading(false));

        return () => controller.abort();
    }, []);

    // we return the state and the setter functions so that the component can use them
    return { games, error, loading };
}

export default useGames;