import { useState } from "react";
import { Movie } from "src/types/movie";

export default function useFetchMovie(movieId: string | undefined) {
  const [data, setData] = useState<Movie | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const performFetch = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `/api/omdb?${new URLSearchParams({ i: movieId } as Record<
          string,
          string
        >)}`
      );
      const json = await response.json();
      setData(json);
    } catch (error: any) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { performFetch, data, isLoading, error };
}
