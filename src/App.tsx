import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GanreList'
import { Genre } from './hooks/useGenres'
import { useState } from 'react'
import PlatformSelector from './components/PlatfromSelector'
import { Platform } from './hooks/usePlatforms'

function App() {
	const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
	const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null)

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
						<GenreList selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)} />
					</GridItem>
				</Show>
				<GridItem gridArea="main">
					<PlatformSelector selectedPlatform={selectedPlatform} onSelectPlatform={(platform) => setSelectedPlatform(platform)} />
					<GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform} />
				</GridItem>
			</Grid>
		</>
	)
}

export default App
