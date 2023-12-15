import { useState, useEffect } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

interface Game {
  id: number;
  name: string;
}

interface FetchGames {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [error, setError] = useState("");
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGames>("/games", { signal: controller.signal })
      .then((response) => setGames(response.data.results))
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error);
      });

    return () => controller.abort();
  }, []);

  return { error, games };
};

export default useGames;
