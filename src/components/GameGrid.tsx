import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid: React.FC = () => {
    const { games, error, loading } = useGames();

    return (
        <Box>
            {loading && <p>Loading...</p>}
            <Text color="red.500">{error}</Text>
            <SimpleGrid columns={{
                sm: 1,
                md: 2,
                lg: 3,
                xl: 4,
            }} spacing="20px" paddingX='10px'>
                {games.map((game) => (
                    <GameCard key={game.id} game={game} />
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default GameGrid;