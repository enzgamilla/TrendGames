import { Grid, GridItem, Show } from "@chakra-ui/react";
import { breakpoints } from "./style-chakraUI/StyleChakraUI";
import NavbarHeader from "./components/NavbarHeader";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  return (
    <Grid templateAreas={breakpoints}>
      <GridItem area={"header"} w="100%">
        <NavbarHeader titleText="TrendGames" />
      </GridItem>
      <Show above="lg">
        <GridItem area={"side-nav"}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
