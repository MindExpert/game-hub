import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid: React.FC = () => {
    const { data, error, isLoading } = useGames();
    const skeletons = [1, 2, 3, 4, 5, 6];

    if (error) return <Text color="red.500">{error}</Text>;

    return (
        <Box>
            <SimpleGrid columns={{
                sm: 1,
                md: 2,
                lg: 3,
                xl: 4,
            }} spacing="20px" paddingX='10px'>
                {isLoading && skeletons.map((skeleton) => (
                    <GameCardContainer key={skeleton}>
                        <GameCardSkeleton />
                    </GameCardContainer>
                ))}
                {data.map((game) => (
                    <GameCardContainer key={game.id}>
                        <GameCard game={game} />
                    </GameCardContainer>
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default GameGrid;