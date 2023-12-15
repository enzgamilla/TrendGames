import { Grid, GridItem, Show } from "@chakra-ui/react";
import { breakpoints } from "./style-chakraUI/StyleChakraUI";
import NavbarHeader from "./components/NavbarHeader";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <Grid templateAreas={breakpoints}>
      <GridItem area={"header"} w="100%">
        <NavbarHeader titleText="TrendGames" />
      </GridItem>
      <Show above="lg">
        <GridItem area={"side-nav"}>
          <GameGrid />
        </GridItem>
      </Show>
      <GridItem area={"main"}></GridItem>
      <GridItem area={"footer"}>Footer</GridItem>
    </Grid>
  );
}

export default App;
