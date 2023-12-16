import useData from "./useData";
import { Genre } from "./useGenre";

export interface Platform {
  id: number;
  slug: string;
  name: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (
  seletedGenre: Genre | null,
  selectedPlatform: Platform | null
) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: seletedGenre?.id,
        parent_platforms: selectedPlatform?.id,
      },
    },
    [seletedGenre?.id, selectedPlatform?.id]
  );

export default useGames;
