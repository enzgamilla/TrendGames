import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import usePlatforms from "../hooks/usePlatforms";
import useGenres from "../hooks/useGenres";

interface Props {
  gameQuery: GameQuery | null;
}

const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenres(gameQuery?.genreId);
  const platform = usePlatforms(gameQuery?.platformId);

  return (
    <Heading as="h1" marginBottom={4}>{`${platform?.name || ""} ${
      genre?.name || ""
    } Games`}</Heading>
  );
};

export default GameHeading;
