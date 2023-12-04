import { Grid, GridItem, Show } from "@chakra-ui/react";
import { breakpoints } from "./style/StyleChakraUI";

function App() {
  return (
    <Grid templateAreas={breakpoints}>
      <GridItem pl={"2"} bg={"orange.300"} area={"header"}>
        Header
      </GridItem>
      <Show above="lg">
        <GridItem pl={"2"} bg={"pink.300"} area={"side-nav"}>
          Side Navigation Bar
        </GridItem>
      </Show>
      <GridItem pl={"2"} bg={"green.300"} area={"main"}>
        Main Body
      </GridItem>
      <GridItem pl={"2"} bg={"blue.300"} area={"footer"}>
        Footer
      </GridItem>
    </Grid>
  );
}

export default App;
