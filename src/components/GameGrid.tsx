import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import { GameContrainerGrid } from "../style-chakraUI/StyleChakraUI";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { error, games, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={GameContrainerGrid} padding="10px" spacing={10}>
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {games.map((gameList) => (
          <GameCard key={gameList.id} game={gameList} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
