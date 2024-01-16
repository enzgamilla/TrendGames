import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import apiClient, { FetchResponse } from "../services/apiClient";

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
  rating_top: number;
}

const queryGames = (games: GameQuery | null) =>
  apiClient.get<FetchResponse<Game>>("/games", {
    params: {
      genres: games?.genre?.id,
      parent_platforms: games?.platform?.id,
      ordering: games?.sortOrder,
      search: games?.searchGame,
    },
  });

const useGames = (gameQuery: GameQuery | null) =>
  useQuery({
    queryKey: ["games", gameQuery],
    queryFn: () => queryGames(gameQuery).then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
  });

export default useGames;
