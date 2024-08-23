import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface GameProps {
    id: number;
    slug: string;
    name: string;
}

interface FetchGamesResponse {
    count: number;
    results: GameProps[];
}

const GameGrid: React.FC = () => {
    const [games, setGames] = useState<GameProps[]>([]);
    const [error, setError] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        apiClient.get<FetchGamesResponse>("/games")
            .then((response) => setGames(response.data.results))
            .catch((error) => setError(error.message))
            .finally(() => setLoading(false));
    }, []);

    return (
        <Box>
            {loading && <p>Loading...</p>}
            <Text color="red.500">{error}</Text>
            <Grid templateColumns="repeat(3, 1fr)" gap={6} bg="teal">
                {games.map((game) => (
                    <GridItem key={game.id} borderRadius="md" padding={4}>
                        <p>{game.name}</p>
                    </GridItem>
                ))}
            </Grid>
        </Box>
    );
};

export default GameGrid;