import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { error, games } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((gameList) => (
          <li key={gameList.id}>{gameList.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
