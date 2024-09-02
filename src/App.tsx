import { Box, Flex, Grid, GridItem, Show, useDisclosure } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GanreList'
import PlatformSelector from './components/PlatfromSelector'
import SortSelector from './components/SortSelector'
import GameHeading from './components/GameHeading'
import MenuDrawer from './components/MenuDrawer'

function App() {
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
					<NavBar onIconClick={handleDrawerToggle} />
				</GridItem>

				<Show above="lg">
					<GridItem gridArea="aside" paddingX={5}>
						<GenreList />
					</GridItem>
				</Show>
				<Show below='lg'>
					<MenuDrawer isOpen={isOpen} onClose={onClose}>
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
		</>
	)
}

export default App
