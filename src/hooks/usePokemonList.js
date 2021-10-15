import { useState, useEffect } from "react";

const URL = "https://pokeapi.co/api/v2/type";

export function usePokemonList() {
  const [pokeList, setPokeList] = useState([]);
  const [requestInProgress, setRequestInProgress] = useState(false);
  const [error, setError] = useState(null);

  async function fetchList() {
    try {
      setRequestInProgress(true);

      const result = await (await fetch(URL)).json();
      setPokeList(result.results);
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setRequestInProgress(false);
    }
  }

  useEffect(() => {
    fetchList();
  }, []);

  return {
    pokeList,
    requestInProgress,
    error,
  };
}
