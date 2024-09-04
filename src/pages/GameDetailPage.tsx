import {
    GridItem,
    Heading,
    SimpleGrid,
    Spinner,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import ExpandableText from '../components/ExpandableText';
import GameAttributes from '../components/GameAttributes';
import GameScreenshots from '../components/GameScreenshots';
import useGame from '../hooks/useGame';
import GameTrailer from '../components/GameTrailer';

const GameDetailPage = () => {
    const { slug } = useParams(); // Grab slug from URL
    const { data: game, isLoading, error } = useGame(slug!); // ! tells TypeScript that slug is not null

    if (isLoading) return <Spinner />;

    if (error || !game) throw error;

    return (
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
            <GridItem>
                <Heading>{game.name}</Heading>
                <ExpandableText>{game.description_raw}</ExpandableText>
                <GameAttributes game={game} />
            </GridItem>
            <GridItem>
                <GameTrailer gameId={game.id} />
                <GameScreenshots gameId={game.id} />
            </GridItem>
        </SimpleGrid>
    );
};

export default GameDetailPage;