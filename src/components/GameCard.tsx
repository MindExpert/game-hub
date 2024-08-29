import React from 'react';
import { Card, CardBody, Heading, Image, HStack } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import Emoji from './Emoji';
import getCroppedImageUrl from '../services/image-url';
import Game from '../entities/Game';

interface Props {
    game: Game
}

const GameCard: React.FC<Props> = ({ game }: Props) => {
    return (
        <Card>
            <Image src={getCroppedImageUrl(game.background_image)} alt={game.name} />
            <CardBody>
                <HStack justifyContent='space-between' marginBottom={3}>
                    <PlatformIconList platforms={game.parent_platforms?.map(p => p.platform)} />
                    <CriticScore score={game.metacritic} />
                </HStack>
                <Heading fontSize='2xl'>{game.name}<Emoji rating={game.rating_top} /></Heading>
            </CardBody>
        </Card>
    );
};

export default GameCard;