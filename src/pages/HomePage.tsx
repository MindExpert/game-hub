import { Box, Grid, Show, GridItem, Flex, useDisclosure } from '@chakra-ui/react'
import GameGrid from '../components/GameGrid'
import GameHeading from '../components/GameHeading'
import PlatformSelector from '../components/PlatformSelector'
import SortSelector from '../components/SortSelector'
import GanreList from '../components/GanreList'
import MenuDrawer from '../components/MenuDrawer'

const HomePage = () => {
    const { isOpen, onClose } = useDisclosure();

    return (
        <Grid
            templateAreas={{
                base: `"main"`,
                lg: `"aside main"`,
            }}
            templateColumns={{
                base: '1fr',
                lg: '250px 1fr'
            }}
        >
            <Show above="lg">
                <GridItem area="aside" paddingX={5}>
                    <GanreList />
                </GridItem>
            </Show>
            <Show below='lg'>
                <MenuDrawer isOpen={isOpen} onClose={onClose}>
                    <GanreList />
                </MenuDrawer>
            </Show>
            <GridItem gridArea="main">
                <Box paddingLeft={2}>
                    <GameHeading />
                    <Flex marginBottom={5}>
                        <Box marginRight={5}>
                            <PlatformSelector />
                        </Box>
                        <SortSelector />
                    </Flex>
                </Box>
                <GameGrid />
            </GridItem>
        </Grid>
    )
}

export default HomePage