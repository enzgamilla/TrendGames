import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenre from "../hooks/useGenre";
import usePlatforms from "../hooks/usePlatform";

interface Props {
  gameQuery: GameQuery | null;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenre();
  const genre = genres?.results.find(
    (genre) => genre.id === gameQuery?.genreId
  );

  const { data: platform } = usePlatforms();
  const selectedPlatform = platform?.results.find(
    (platform) => platform.id === gameQuery?.platformId
  );

  return (
    <Heading as="h1" marginBottom={4}>{`${selectedPlatform?.name || ""} ${
      genre?.name || ""
    } Games`}</Heading>
  );
};

export default GameHeading;
