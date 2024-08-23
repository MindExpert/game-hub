import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GanreList'

function App() {

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
					<NavBar />
				</GridItem>
				<Show above="lg">
					<GridItem gridArea="aside" paddingX={5}>
						<GenreList selectedGenre={null} onSelectGenre={() => console.log('selected')} />
					</GridItem>
				</Show>
				<GridItem gridArea="main">
					<GameGrid />
				</GridItem>
			</Grid>
		</>
	)
}

export default App
