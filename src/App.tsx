import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import {
  SideAndMainGridSize,
  breakpoints,
} from "./style-chakraUI/StyleChakraUI";
import NavbarHeader from "./components/NavbarHeader";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import SearchInput from "./components/SearchInput";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
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
            selectedGenre={gameQuery.genre}
            onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <SearchInput
          searchGame={(searchGame) =>
            setGameQuery({ ...gameQuery, searchGame })
          }
        />
        <HStack spacing={5} padding={2}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectedPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <SortSelector
            sortOrder={gameQuery.sortOrder}
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
