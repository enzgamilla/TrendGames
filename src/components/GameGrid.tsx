import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";

interface Game {
  id: number;
  name: string;
}

interface FetchGames {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [error, setError] = useState("");
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    apiClient
      .get<FetchGames>("/games")
      .then((response) => setGames(response.data.results))
      .catch((error) => setError(error));
  }, []);

  return (
    <ul>
      {games.map((gameList) => (
        <li key={gameList.id}>{gameList.name}</li>
      ))}
    </ul>
  );
};

export default GameGrid;
