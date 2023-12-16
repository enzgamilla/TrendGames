import { Box, Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery | null;
}

const GameHeading = ({ gameQuery }: Props) => {
  return (
    <Heading as="h1" marginBottom={4}>{`${gameQuery?.platform?.name || ""} ${
      gameQuery?.genre?.name || ""
    } Games`}</Heading>
  );
};

export default GameHeading;
