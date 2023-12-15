import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/apiClient";
import { Game } from "./useGames";

interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

interface FetchGenre {
  count: number;
  results: Genre[];
}

const useGenre = () => {
  const [error, setError] = useState("");
  const [genres, setGenres] = useState<Genre[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);

    apiClient
      .get<FetchGenre>("/genres", { signal: controller.signal })
      .then((response) => {
        setGenres(response.data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { error, genres, isLoading };
};

export default useGenre;
