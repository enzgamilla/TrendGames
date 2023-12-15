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

const useGames = (seletedGenre: Genre | null) =>
  useData<Game>("/games", { params: { genres: seletedGenre?.id } }, [
    seletedGenre?.id,
  ]);

export default useGames;
