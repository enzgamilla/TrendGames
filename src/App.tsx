import { Grid, GridItem, Show } from "@chakra-ui/react";
import { breakpoints } from "./style-chakraUI/StyleChakraUI";
import NavbarHeader from "./components/NavbarHeader";

function App() {
  return (
    <Grid templateAreas={breakpoints}>
      <GridItem area={"header"} w="100%">
        <NavbarHeader titleText="TrendGames" />
      </GridItem>
      <Show above="lg">
        <GridItem area={"side-nav"}>Side Navigation Bar</GridItem>
      </Show>
      <GridItem area={"main"}>Main Body</GridItem>
      <GridItem area={"footer"}>Footer</GridItem>
    </Grid>
  );
}

export default App;
