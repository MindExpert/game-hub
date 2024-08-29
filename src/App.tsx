import { Box, Flex, Grid, GridItem, Show, useDisclosure } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GanreList'
import { useState } from 'react'
import PlatformSelector from './components/PlatfromSelector'
import SortSelector from './components/SortSelector'
import GameHeading from './components/GameHeading'
import MenuDrawer from './components/MenuDrawer'
import Genre from './entities/Genre'
import Platform from './entities/Platform'

export interface GameQuery {
	genre: Genre | null;
	platform: Platform | null;
	sortOrder: string;
	searchText: string;
}

function App() {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
	const { isOpen, onOpen, onClose } = useDisclosure()

	const handleDrawerToggle = () => {
		if (isOpen) {
			onClose()
		} else {
			onOpen()
		}
	}

	return (
		<>
			<Grid
				templateAreas={{
					base: `"nav" "main"`,
					md: `"nav" "main"`,
					lg: `"nav nav" "aside main"`,
				}}
				templateColumns={{
					base: '1fr',
					lg: '250px 1fr'
				}}
			>
				<GridItem gridArea="nav">
					<NavBar onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })} onIconClick={handleDrawerToggle} />
				</GridItem>
				<Show above="lg">
					<GridItem gridArea="aside" paddingX={5}>
						<GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })} />
					</GridItem>
				</Show>
				<Show below='lg'>
					<MenuDrawer isOpen={isOpen} onClose={onClose}>
						<GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })} />
					</MenuDrawer>
				</Show>

				<GridItem gridArea="main">
					<Box paddingLeft={2}>
						<GameHeading gameQuery={gameQuery} />
						<Flex marginBottom={5}>
							<Box marginRight={5}>
								<PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })} />
							</Box>
							<SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })} />
						</Flex>
					</Box>
					<GameGrid gameQuery={gameQuery} />
				</GridItem>
			</Grid>
		</>
	)
}

export default App
