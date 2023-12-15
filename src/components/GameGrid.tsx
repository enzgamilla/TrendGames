import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import { GameContrainerGrid } from "../style-chakraUI/StyleChakraUI";

const GameGrid = () => {
  const { error, games } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={GameContrainerGrid} padding="10px" spacing={10}>
        {games.map((gameList) => (
          <GameCard key={gameList.id} game={gameList} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
