import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import {
  SideAndMainGridSize,
  breakpoints,
} from "./style-chakraUI/StyleChakraUI";
import NavbarHeader from "./components/NavbarHeader";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import SearchInput from "./components/SearchInput";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genreId?: number;
  platformId: number;
  sortOrder: string;
  searchGame: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid templateAreas={breakpoints} templateColumns={SideAndMainGridSize}>
      <GridItem area={"header"} w="100%">
        <NavbarHeader titleText="TrendGames" />
      </GridItem>
      <Show above="lg">
        <GridItem area={"side-nav"} paddingX={5}>
          <GenreList
            selectedGenreId={gameQuery.genreId}
            onSelectedGenre={(genre) =>
              setGameQuery({ ...gameQuery, genreId: genre.id })
            }
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <Box padding={2}>
          <SearchInput
            searchGame={(searchGame) =>
              setGameQuery({ ...gameQuery, searchGame })
            }
          />
          <GameHeading gameQuery={gameQuery} />
          <HStack spacing={5}>
            <PlatformSelector
              selectedPlatformId={gameQuery.platformId}
              onSelectedPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platformId: platform.id })
              }
            />
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </HStack>
        </Box>

        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
