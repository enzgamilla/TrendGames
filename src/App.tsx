import { Grid, GridItem, Show } from "@chakra-ui/react";
import { breakpoints } from "./style/StyleChakraUI";
import NavbarHeader from "./components/NavbarHeader";

function App() {
  return (
    <Grid templateAreas={breakpoints}>
      <GridItem area={"header"}>
        <NavbarHeader logoSize="4rem" titleText="TrendGames" />
      </GridItem>
      <Show above="lg">
        <GridItem bg={"pink.300"} area={"side-nav"}>
          Side Navigation Bar
        </GridItem>
      </Show>
      <GridItem bg={"green.300"} area={"main"}>
        Main Body
      </GridItem>
      <GridItem bg={"blue.300"} area={"footer"}>
        Footer
      </GridItem>
    </Grid>
  );
}

export default App;
