import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameGrid: React.FC = () => {
    const { games, error, loading } = useGames();

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