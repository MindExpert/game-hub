import { Box, Grid, Show, GridItem, Flex } from '@chakra-ui/react'
import GameGrid from '../components/GameGrid'
import GameHeading from '../components/GameHeading'
import PlatformSelector from '../components/PlatformSelector'
import SortSelector from '../components/SortSelector'
import GenreList from '../components/GenreList'
import MenuDrawer from '../components/MenuDrawer'
import useMenuDrawerStore from '../stores/useMenuDrawerStore'

const HomePage = () => {
    const { isOpen, toggleMenuDrawer } = useMenuDrawerStore();

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
                    <GenreList />
                </GridItem>
            </Show>
            <Show below='lg'>
                <MenuDrawer isOpen={isOpen} onClose={toggleMenuDrawer}>
                    <GenreList />
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